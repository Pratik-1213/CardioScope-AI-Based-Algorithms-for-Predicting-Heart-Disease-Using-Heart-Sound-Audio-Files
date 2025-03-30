from flask import Flask, request, render_template, jsonify
import librosa
import numpy as np
import os
import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

app = Flask(__name__)

DATASET_PATH = "data/heart_sounds/"
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
    1: "Disease 1",
    2: "Disease 2",
    3: "Disease 3",
    4: "Disease 4"
}

@app.route('/', methods=['GET', 'POST'])  # ✅ Allows both GET and POST
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict_audio():
    if 'audio_file' not in request.files:
        return "No file uploaded"

    audio_file = request.files['audio_file']
    file_path = "temp_audio.wav"
    audio_file.save(file_path)

    features = extract_features_from_audio(file_path)
    os.remove(file_path)

    if features is None:
        return "Error processing audio"

    X_new = np.array(features).reshape(1, -1)
    predicted_label = clf.predict(X_new)[0]
    prediction = label_map.get(predicted_label, "Unknown")

    return prediction  # ✅ Return plain text directly


if __name__ == '__main__':
    app.run(debug=True)
