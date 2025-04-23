import subprocess

def midi_to_pdf(midi_file_path, output_pdf_path):
    try:
        subprocess.run(
            ["MuseScore4", '-o', output_pdf_path, midi_file_path],
            check=True
        )
    except subprocess.CalledProcessError as e:
        print(f"MuseScore error: {e}")

#midi_to_pdf('./input/Twinkle_Twinkle.mid', './output/Twinkle_Twinkle_output.pdf')
midi_to_pdf('./input/Sneaky Snitch.mid', './output/Sneaky Snitchoutput.pdf')
#midi_to_pdf('./input/NC_music_vocals.mid', './output/NC_music_vocals_output.pdf')
