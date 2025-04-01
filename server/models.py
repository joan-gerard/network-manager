from app import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(125), nullable=False)
    last_name = db.Column(db.String(125), nullable=False)
    role = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    linkedin_profile = db.Column(db.String(100), nullable=True)
    phone_number = db.Column(db.String(100), nullable=True)
    notes = db.Column(db.Text, nullable=True)
    img_url = db.Column(db.String(200), nullable=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "role": self.role,
            "company": self.company,
            "email": self.email,
            "linkedinProfile": self.linkedin_profile,
            "phoneNumber": self.phone_number,
            "notes": self.notes,
            "imgUrl": self.img_url,
        }