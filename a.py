"""
organize_product_images.py

Organizes your 105 generated images (named like "1_202609011423.webp") 
into a clean folder structure by category > product > shot type, 
matching the /public/products/ structure used in your Next.js project.

HOW TO USE:
1. Put this script in the SAME parent folder as your images, 
   OR set SOURCE_FOLDER below to point to wherever they are.
2. Run:  python organize_product_images.py
3. It will create an "organized" folder with everything sorted and 
   renamed correctly. Your original files are NOT deleted (copied, not moved).

If you'd rather MOVE instead of COPY (delete originals after organizing), 
change COPY_MODE to False below.
"""

import os
import re
import shutil

# ============ CONFIG — edit these two lines if needed ============
SOURCE_FOLDER = "D:\\Users\\DELL\\Pictures\\Camera Roll\\92Degrees"      # folder containing your 1_xxxx.webp ... 105_xxxx.webp
OUTPUT_FOLDER = "D:\\Users\\DELL\\Pictures\\Camera Roll\\92Degrees\\organized"        # where the sorted folders will be created
COPY_MODE = True                     # True = copy files (keep originals), False = move files
# ===================================================================

# Shot type order within each 5-image product block
SHOT_NAMES = ["front", "back", "angle-3-4", "closeup", "flatlay"]

# Product order matching the prompt file sequence (1-105)
# Each entry: (category_slug, product_slug)
PRODUCT_SEQUENCE = [
    ("puffer-jackets", "onyx-leather-puffer"),
    ("puffer-jackets", "cognac-leather-puffer"),
    ("puffer-jackets", "high-collar-thermal-puffer"),
    ("puffer-jackets", "slate-grey-leather-puffer"),
    ("puffer-jackets", "classic-black-moto-puffer"),
    ("puffer-jackets", "storm-blue-leather-puffer"),
    ("leather-jackets", "leather-bomber"),
    ("leather-jackets", "classic-biker-jacket"),
    ("leather-jackets", "cognac-leather-jacket"),
    ("leather-jackets", "low-angle-statement-jacket"),
    ("leather-jackets", "charcoal-leather-jacket"),
    ("leather-jackets", "tan-leather-racer"),
    ("polo", "polo-navy"),
    ("polo", "polo-off-white"),
    ("polo", "polo-olive"),
    ("hoodies", "hoodie-black"),
    ("hoodies", "hoodie-grey"),
    ("hoodies", "hoodie-cream"),
    ("tracksuits", "tracksuit-black"),
    ("tracksuits", "tracksuit-charcoal"),
    ("tracksuits", "tracksuit-stone"),
]

def build_image_number_map():
    """
    Builds a dict: { image_number (1-105) : (category, product_slug, shot_name) }
    """
    mapping = {}
    image_num = 1
    for category, product_slug in PRODUCT_SEQUENCE:
        for shot in SHOT_NAMES:
            mapping[image_num] = (category, product_slug, shot)
            image_num += 1
    return mapping


def get_file_extension(filename):
    return os.path.splitext(filename)[1].lower()


def main():
    if not os.path.isdir(SOURCE_FOLDER):
        print(f"ERROR: Source folder '{SOURCE_FOLDER}' not found.")
        print("Edit SOURCE_FOLDER at the top of this script to point to your images.")
        return

    mapping = build_image_number_map()
    os.makedirs(OUTPUT_FOLDER, exist_ok=True)

    processed = 0
    skipped = []

    for filename in os.listdir(SOURCE_FOLDER):
        full_path = os.path.join(SOURCE_FOLDER, filename)
        if not os.path.isfile(full_path):
            continue

        # Match filenames like "1_202609011423.webp" or "23_202609011423.png"
        match = re.match(r"^(\d+)_.*\.(webp|jpg|jpeg|png)$", filename, re.IGNORECASE)
        if not match:
            skipped.append(filename)
            continue

        image_num = int(match.group(1))
        ext = get_file_extension(filename)

        if image_num not in mapping:
            skipped.append(filename)
            continue

        category, product_slug, shot_name = mapping[image_num]

        # Destination: organized/<category>/<product_slug>/<product_slug>-<shot_name>.webp
        dest_dir = os.path.join(OUTPUT_FOLDER, category, product_slug)
        os.makedirs(dest_dir, exist_ok=True)

        new_filename = f"{product_slug}-{shot_name}{ext}"
        dest_path = os.path.join(dest_dir, new_filename)

        if COPY_MODE:
            shutil.copy2(full_path, dest_path)
        else:
            shutil.move(full_path, dest_path)

        print(f"[{image_num:>3}] {filename}  ->  {category}/{product_slug}/{new_filename}")
        processed += 1

    print("\n----------------------------------------")
    print(f"Done. Processed {processed} images.")
    if skipped:
        print(f"Skipped {len(skipped)} file(s) that didn't match the expected pattern:")
        for s in skipped:
            print(f"  - {s}")
    print(f"Organized images are in: {os.path.abspath(OUTPUT_FOLDER)}")
    print("----------------------------------------")


if __name__ == "__main__":
    main()