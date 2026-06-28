from pathlib import Path
import shutil

EXTENSION_MAP = {
    ".pdf": "pdfs",
    ".jpg": "images",
    ".png": "images",
    ".mp4": "videos",
    ".txt": "text",
    ".md": "markdown"
}

def organize_folder(folder_path):
    folder = Path(folder_path)

    for item in folder.iterdir():
        if not item.is_file():
            continue
        file_ext = item.suffix
        if file_ext not in EXTENSION_MAP:
            continue
        dest_folder = folder / EXTENSION_MAP[file_ext]
        dest_folder.mkdir(exist_ok=True)
        shutil.move(str(item), str(dest_folder))

if __name__ == "__main__":
    organize_folder(".")