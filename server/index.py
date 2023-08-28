from flask import Flask, request, jsonify
import os
from constants import FileConstants
from parse_resume import parse_resume_content
from translators import Translators

app = Flask(__name__)

@app.route('/parse_resume', methods=['POST'])
def parse_resume():
    try:
        resume = request.files['resume']
        if resume:
            file_extension = os.path.splitext(resume.filename)[1].lower()
            data_as_txt = ''

            if file_extension == FileConstants.PDF_EXTENSION:
                data_as_txt = Translators.pdf_to_txt(resume)
            elif file_extension == FileConstants.DOCX_EXTENSION:
                data_as_txt = Translators.docx_to_txt(resume)
            elif file_extension == FileConstants.TXT_EXTENSION:
                data_as_txt = resume.read().decode(FileConstants.UTF_8)
            else:
                return jsonify({'message': 'Unsupported file format.'}), 400
            
            return parse_resume_content(data_as_txt)
        
        else:
            return jsonify({'message': 'No file uploaded.'}), 400
    except Exception as e:
        return jsonify({'message': 'An error occurred: {}'.format(str(e))}), 500

if __name__ == '__main__':
	app.run(debug=True)
