from pprint import pprint
from flask import Flask, jsonify
from flask import request
from flask import abort, render_template, session, g
import bcrypt
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
import sys

import json

app = Flask(__name__)
app.secret_key = 'super secret key'


with app.app_context():
    CORS(app)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///gradebook.sqlite"
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='microblog', template_mode='bootstrap3')
    global currenUser
    global counter
    db = SQLAlchemy(app)

    class Student(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        userID = db.Column(db.String, unique=True, nullable=False)
        name = db.Column(db.String, unique=False, nullable=False)


    class Users(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        userID = db.Column(db.String, unique=True, nullable=False)
        password = db.Column(db.String, unique=False, nullable=False)

    class Classes(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        classID = db.Column(db.String, unique=True, nullable=True)
        teacherName = db.Column(db.String, unique=False, nullable=True)
        classTime = db.Column(db.String, unique=False, nullable=True)
        enrolledNum = db.Column(db.Integer, unique=False, nullable=True)
        maxEnrollment = db.Column(db.Integer, unique=False, nullable=True)


    class Teacher(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        teacherName = db.Column(db.String, unique=False, nullable=True)
        userID = db.Column(db.String, unique=True, nullable=False)


    class Enrollment(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        classID = db.Column(db.String, unique=False, nullable=True)
        userID = db.Column(db.String, unique=False, nullable=False)
        grade = db.Column(db.Float, unique=False, nullable=True)

    class User(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String, unique=False, nullable=True)
        userID = db.Column(db.String, unique=True, nullable=False)
        password = db.Column(db.String, unique=False, nullable=False)
        isStudent = db.Column(db.Boolean, unique=False, nullable=False)


    db.create_all()
    admin.add_view(ModelView(Student, db.session))
    admin.add_view(ModelView(Users, db.session))
    admin.add_view(ModelView(Teacher, db.session))
    admin.add_view(ModelView(Classes, db.session))
    admin.add_view(ModelView(Enrollment, db.session))
    admin.add_view(ModelView(User, db.session))

    @app.route('/')
    def home():
        return render_template('register.html')


    @app.route('/register', methods=['POST'])
    def register():
        usn = request.form['usn']
        name = request.form['fname']
        pswd = request.form['psw']
        student= True

        hashed = bcrypt.hashpw(pswd.encode('utf-8'), bcrypt.gensalt())

        allClass = Classes.query.all()
        enrolled = Enrollment.query.all()
        counter = 0
        c2 = 0
        classes = {}
        classTaken = {}
        schedule = {}
        for i in allClass:
            counter += 1
        for i in range(0, counter):
            classes[i] = {}
            classes[i]["classID"] = allClass[i].classID
            classes[i]["teacherName"] = allClass[i].teacherName
            classes[i]["classTime"] = allClass[i].classTime
            classes[i]["enrolledNum"] = allClass[i].enrolledNum
            classes[i]["maxEnrollment"] = allClass[i].maxEnrollment

        for i in range(0, counter):
            if (classes[i]["teacherName"] == name) and (classes[i]["classID"] == allClass[i].classID):
                student = False
                break

        db.session.add(User(name=name, userID=usn, password=hashed, isStudent=student))
        db.session.commit()
        return render_template('login.html', info="Hello "+name)


    @app.route('/register', methods=['Get'])
    def registerHome():
        return render_template('register.html')
    # STUDENT FUNCTIONS

    @app.route('/<string:username>', methods=['GET'])
    def get_studentID(username):
        student = Student.query.all()
        result = db.session.execute(db.select(Student.name).where(Student.userID == username))
        nameDictionary = [dict(r) for r in result.all()]
        for nameDict in nameDictionary:
            return nameDict["name"]
        return ""


    @app.route('/<string:username>/classes', methods=['GET'])
    def get_student_class(username):
        allClass = Classes.query.all()
        enrolled = Enrollment.query.all()
        counter = 0
        c2 = 0
        classes = {}
        classTaken = {}
        schedule = {}
        for i in allClass:
            counter += 1
        for i in range(0, counter):
            classes[i] = {}
            classes[i]["classID"] = allClass[i].classID
            classes[i]["teacherName"] = allClass[i].teacherName
            classes[i]["classTime"] = allClass[i].classTime
            classes[i]["enrolledNum"] = allClass[i].enrolledNum
            classes[i]["maxEnrollment"] = allClass[i].maxEnrollment
        for i in enrolled:
            c2 += 1
        for i in range(0, c2):
            classTaken[i] = {}
            classTaken[i]["classID"] = enrolled[i].classID
            classTaken[i]["userID"] = enrolled[i].userID
            classTaken[i]["grade"] = enrolled[i].grade

        for i in range(0, counter):
            for j in range(0, c2):
                if (classTaken[j]["userID"] == username) and (classTaken[j]["classID"] == allClass[i].classID):
                    schedule[i] = {}
                    schedule[i]["classID"] = allClass[i].classID
                    schedule[i]["teacherName"] = allClass[i].teacherName
                    schedule[i]["classTime"] = allClass[i].classTime
                    schedule[i]["enrolledNum"] = allClass[i].enrolledNum
                    schedule[i]["maxEnrollment"] = allClass[i].maxEnrollment
        # if
        print(classes)
        print(schedule)
        return schedule

    @app.route('/school/classes')
    def getAllClass():
        allClass = Classes.query.all()
        enrolled = Enrollment.query.all()
        counter = 0
        username = "David Hernandez"
        c2 = 0
        classes = {}
        classTaken = {}
        schedule = {}
        for i in allClass:
            counter += 1
        for i in range(0, counter):
            classes[i] = {}
            classes[i]["classID"] = allClass[i].classID
            classes[i]["teacherName"] = allClass[i].teacherName
            classes[i]["classTime"] = allClass[i].classTime
            classes[i]["enrolledNum"] = allClass[i].enrolledNum
            classes[i]["maxEnrollment"] = allClass[i].maxEnrollment
        for i in enrolled:
            c2 += 1
        for i in range(0, c2):
            classTaken[i] = {}
            classTaken[i]["classID"] = enrolled[i].classID
            classTaken[i]["userID"] = enrolled[i].userID
            classTaken[i]["grade"] = enrolled[i].grade

        for i in range(0, counter):
            for j in range(0, c2):
                if (classTaken[j]["userID"] == username) and (classTaken[j]["classID"] == allClass[i].classID):
                    schedule[i] = {}
                    schedule[i]["classID"] = allClass[i].classID
                    schedule[i]["teacherName"] = allClass[i].teacherName
                    schedule[i]["classTime"] = allClass[i].classTime
                    schedule[i]["enrolledNum"] = allClass[i].enrolledNum
                    schedule[i]["maxEnrollment"] = allClass[i].maxEnrollment
        #if
        print(classes)
        print(schedule)
        return classes

    @app.route('/enroll', methods=['PUT'])
    def editEnrollment():  # Done, needs to sanitize input.
        # Send json of user and class name
        # Load up all the categories we may use and edit
        contents = request.json
        targetStudent = Student.query.all()
        classUpdate = Classes.query.filter_by(classID=contents["classname"]).first()
        updateEnroll = Enrollment.query.all()
        # json.loads(contents) #Sanitizer, gives error at the moment.
        print(contents)
        targetClassNum = classUpdate.enrolledNum
        targetClassMax = classUpdate.maxEnrollment
        print(str(targetClassMax))
        print(str(targetClassNum))
        # Check if we have space!
        if (targetClassNum < targetClassMax):
            # Perform the logic here
            # Upon successful checking of space, we can now add the student to the class. This should be done in enrollment, where we have classID, userID, and grade.
            db.session.add(Enrollment(classID=contents["classname"], userID=contents["username"], grade=100.0))
            # Now we need to update the enrollmentNum in Classes.
            # Retrieve the class by using classID as the filter.
            newClassNum = Classes.query.filter_by(classID=contents["classname"]).update(
                dict(enrolledNum=targetClassNum + 1))

        db.session.commit()
        return "check"

    @app.route('/unenroll', methods=['DELETE'])
    def delEnrollment():  # Done, needs to sanitize input.
        # Send json of user and class name
        # Load up all the categories we may use and edit
        contents = request.get_json(silent=True)
        targetStudent = Student.query.all()
        classUpdate = Classes.query.filter_by(classID=contents["classname"]).first()
        updateEnroll = Enrollment.query.all()

        # json.loads(contents) #Sanitizer, gives error at the moment.
        print(contents)
        targetClassNum = classUpdate.enrolledNum
        targetClassMax = classUpdate.maxEnrollment
        print(str(targetClassMax))
        print(str(targetClassNum))
        # Check if we have space!
        if (targetClassNum > 0):
            # Perform the logic here
            deletedUser = Enrollment.query.filter_by(userID=contents["username"], classID=contents["classname"]).first()
            db.session.delete(deletedUser)
            # Now we need to update the enrollmentNum in Classes.
            # Retrieve the class by using classID as the filter.
            newClassNum = Classes.query.filter_by(classID=contents["classname"]).update(
                dict(enrolledNum=targetClassNum - 1))

        db.session.commit()
        return "check"


    # TEACHER FUNCTIONS
    @app.route('/editGrade', methods=['PUT'])
    def editGrades():
        contents = request.json
        cn = contents["classID"]
        nm = contents["userID"]
        gr = contents["grade"]
        newGrade = Enrollment.query.filter_by(userID=nm, classID=cn).update(dict(grade=gr))

        print(gr)
        db.session.commit()
        return "success"

    @app.route('/<string:username>/teacherClass', methods=['GET'])
    def getTeacherClass(username):
        allClass = Classes.query.all()
        enrolled = Enrollment.query.all()
        counter = 0
        c2 = 0
        classes = {}
        classTaken = {}
        schedule = {}
        for i in allClass:
            counter += 1
        for i in range(0, counter):
            classes[i] = {}
            classes[i]["classID"] = allClass[i].classID
            classes[i]["teacherName"] = allClass[i].teacherName
            classes[i]["classTime"] = allClass[i].classTime
            classes[i]["enrolledNum"] = allClass[i].enrolledNum
            classes[i]["maxEnrollment"] = allClass[i].maxEnrollment
        # for i in enrolled:
        #     c2 += 1
        # for i in range(0, c2):
        #     classTaken[i] = {}
        #     classTaken[i]["classID"] = enrolled[i].classID
        #     classTaken[i]["userID"] = enrolled[i].userID
        #     classTaken[i]["grade"] = enrolled[i].grade

        for i in range(0, counter):
            if (classes[i]["teacherName"] == username) and (classes[i]["classID"] == allClass[i].classID):
                schedule[i] = {}
                schedule[i]["classID"] = allClass[i].classID
                schedule[i]["teacherName"] = allClass[i].teacherName
                schedule[i]["classTime"] = allClass[i].classTime
                schedule[i]["enrolledNum"] = allClass[i].enrolledNum
                schedule[i]["maxEnrollment"] = allClass[i].maxEnrollment
        # if
        print(classes[1]["teacherName"])
        print(username)
        print(schedule)
        return schedule


    @app.route('/<string:username>/<string:classname>/studentGrades', methods=['GET'])
    def getStudentGrades(username, classname):
        userTeacher = Teacher.query.filter_by(userID=username).first()  # Targets the teacher with the same ID.
        targetClass = Classes.query.filter_by(classID=classname).first()  # Finds the class that has the same ID/name.
        targetEnrollment = Enrollment.query.filter_by(classID=targetClass.classID)
        # We want to pull all of the student's grades from the classes that the teacher will teach.


    @app.route('/<string:classname>/studentGrades', methods=['POST'])
    def getStudentRoster(classname):
        allClass = Classes.query.all()
        enrolled = Enrollment.query.all()
        counter = 0
        c2 = 0
        classes = {}
        classTaken = {}
        roster = {}
        for k in enrolled:
            c2 += 1
        for i in range(0, c2):
            classTaken[i] = {}
            classTaken[i]["classID"] = enrolled[i].classID
            classTaken[i]["userID"] = enrolled[i].userID
            classTaken[i]["grade"] = enrolled[i].grade
        for j in range(0, c2):
            if (classname == classTaken[j]["classID"]):
                roster[j] = {}
                roster[j]["classID"] = enrolled[j].classID
                roster[j]["userID"] = enrolled[j].userID
                roster[j]["grade"] = enrolled[j].grade

        print(classname)
        print(roster)
        print(classTaken)
        return roster
    @app.route('/login', methods=['POST', 'GET'])
    def login():
        if request.method == 'POST':

            session.pop('Username', None)
            name = request.form['usn']
            pswd = request.form['psw']

            user =User.query.filter_by(userID=name).first()

            if not user:
                return render_template('login.html', info="wrong Username")
            if bcrypt.checkpw(pswd.encode('utf-8'), user.password):
                if user.isStudent:
                    return render_template('profile.html', name=user.name)
                else:
                    return render_template('Add.html', name=user.name)
            else:
                return render_template('login.html', info="wrong Password")


    @app.route('/logout', methods=['POST', 'GET'])
    def logout():
        return render_template('login.html')
if __name__ == "__main__":
    app.run(debug=True)
