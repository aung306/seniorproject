import subprocess

def midi_to_pdf(midi_file_path, output_pdf_path):
    try:
        subprocess.run(
            ["MuseScore4", '-o', output_pdf_path, midi_file_path],
            check=True
        )
    except subprocess.CalledProcessError as e:
        print(f"MuseScore error: {e}")

#midi_to_pdf('./input/input.mid', './output/output.pdf')
midi_to_pdf('./input/input2.mid', './output/output2.pdf')