import re
from constants import RegexConstants, ResponseConstants

# Using Regex to scrap email address and all type of mobile number pattern that may exist in the filw
def extract_contact_info(text):
    emails = re.findall(RegexConstants.EMAIL_REGEX, text)
    phone = re.findall(RegexConstants.PHONE_REGEX, text)

    return emails, phone

def parse_resume_content(text):
    # Assuming that the first two words of the resume are generally the applicant name
    name = text.split(None, 2)
    first_name = name[0] if name else ''
    last_name = name[1] if len(name) > 1 else ''

    emails, phones = extract_contact_info(text)
    
    return {
        ResponseConstants.FIRST_NAME: first_name,
        ResponseConstants.LAST_NAME: last_name,
        ResponseConstants.EMAIL: emails[0] if emails else '',
        ResponseConstants.PHONE: phones[0] if phones else ''
    }
