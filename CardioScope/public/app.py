from flask import Flask, request, render_template, jsonify, send_from_directory
import librosa
import numpy as np
import os
import pickle
import socket
import tempfile
from flask_cors import CORS
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

app = Flask(__name__)
CORS(app)

DATASET_PATH = "public/data/heart_sounds/"
MODEL_FILE = os.path.join(DATASET_PATH, "trained_model.pkl")

# Load or train the model
if os.path.exists(MODEL_FILE):
    with open(MODEL_FILE, 'rb') as f:
        clf = pickle.load(f)
    print("Model loaded successfully.")
else:
    X = np.load(os.path.join(DATASET_PATH, "train/X_train.npy"))
    y = np.load(os.path.join(DATASET_PATH, "train/y_train.npy"))
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    clf = RandomForestClassifier(n_estimators=100, random_state=42)
    clf.fit(X_train, y_train)

    with open(MODEL_FILE, 'wb') as f:
        pickle.dump(clf, f)
    print("Model trained and saved.")

# Feature Extraction Function
def extract_features_from_audio(file_path, max_pad_length=50):
    try:
        y, sr = librosa.load(file_path, sr=22050)
        mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40)
        pad_width = max_pad_length - mfcc.shape[1]
        if pad_width > 0:
            mfcc = np.pad(mfcc, pad_width=((0, 0), (0, pad_width)), mode='constant')
        else:
            mfcc = mfcc[:, :max_pad_length]
        return mfcc.flatten()
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return None

# Label Mapping
label_map = {
    0: "Normal Heart Sound",
    1: "Aortic Stenosis",
    2: "Mitral Regurgitation",
    3: "Mitral Stenosis",
    4: "Mitral Valve Prolapse"
}

@app.route('/', methods=['GET', 'POST'])  # ✅ Allows both GET and POST
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict_and_analyze_audio():
    if 'audio_file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    audio_file = request.files['audio_file']
    file_path = "temp_audio.wav"
    audio_file.save(file_path)

    try:
        # Prediction
        features = extract_features_from_audio(file_path)
        if features is None:
            os.remove(file_path)
            return jsonify({'error': 'Error processing audio'}), 500

        X_new = np.array(features).reshape(1, -1)
        predicted_label = clf.predict(X_new)[0]
        prediction = label_map.get(predicted_label, "Unknown")
        
        # Analysis
        y, sr = librosa.load(file_path, sr=None)
        duration = librosa.get_duration(y=y, sr=sr)
        heart_rate_data = [{'time': i, 'bpm': 70 + np.random.randint(-8, 8)} for i in range(int(duration))]
        avg_heart_rate = np.mean([d['bpm'] for d in heart_rate_data])

        num_points = 500
        time = np.linspace(0, 5, num_points)
        ecg_data = (
            0.3 * np.sin(2 * np.pi * 1 * time) +
            0.05 * np.sin(2 * np.pi * 4 * time) +
            0.02 * np.sin(2 * np.pi * 8 * time) +
            np.random.normal(0, 0.01, num_points)
        ).tolist()

        waveform_time = np.linspace(0, duration, len(y))
        audio_waveform = {
            'time': waveform_time.tolist(),
            'amplitude': y.tolist()
        }
        
        os.remove(file_path)

        return jsonify({
            'prediction': prediction,
            'heart_rate_data': heart_rate_data,
            'audio_waveform': audio_waveform,
            'ecg_data': ecg_data,
            'avg_heart_rate': round(avg_heart_rate, 2),
        })
    
    except Exception as e:
        if os.path.exists(file_path):
            os.remove(file_path)
        print(e)
        return jsonify({'error': str(e)}), 500

@app.route('/get_computer_name')
def get_computer_name():
    try:
        computer_name = socket.gethostname()
        return jsonify({'computer_name': computer_name})
    except Exception as e:
        print(f"Error getting computer name: {e}")
        return jsonify({'computer_name': 'User'})

if __name__ == '__main__':
    app.run(debug=True)
