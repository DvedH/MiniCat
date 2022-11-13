from pprint import pprint
from flask import Flask, jsonify
from flask import request
from flask import abort, render_template, session, g
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
        return render_template('login.html')


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
        print('Getting class...')
        # Query all values of Enrollment, the database where the classes are located.
        enroll = Enrollment.query.all()
        result = db.session.execute(db.select(Enrollment.classID).where(
            Enrollment.userID == username))  # Select the parts of enrollment where classID is the same as the ID of the student
        # print(type(result.all()))
        # Create a dictionary that shows all classes that the student has.
        classDictionary = [dict(r) for r in result.all()]
        for classDict in classDictionary:
            classDict["classID"]
        return classDict["classID"]


    # @app.route('/school/classes')
    # def getAllClass():
    #     allClass = Classes.query.all()
    #     classes = {}
    #
    #     for i in allClass:
    #         classes["classID"] = i.classID
    #         classes["teacherName"] = i.teacherName
    #         classes["classTime"] = i.classTime
    #         classes["enrolledNum"] = str(i.enrolledNum)
    #         classes["maxEnrollment"] = str(i.maxEnrollment)
    #
    #         # convert = str(i.enrolledNum)
    #         # classes[i.classID] = i.classID
    #         # classes[i.teacherName] = i.teacherName
    #         # classes[i.classTime] = i.classTime
    #         # classes[str(i.enrolledNum)] = str(i.enrolledNum)
    #         # classes[str(i.maxEnrollment)] = str(i.maxEnrollment)
    #     print(classes)
    #     return classes

    @app.route('/school/classes')
    def getAllClass():
        allClass = Classes.query.all()
        classes = {}
        for i in allClass:
            classes[i.id] = i.classID
        return classes
    @app.route('/school/classes/1')
    def getAllClass1():
        allClass = Classes.query.all()
        classes = {}
        for i in allClass:
            classes[i.id] = i.teacherName
        return classes

    @app.route('/school/classes/2')
    def getAllClass2():
        allClass = Classes.query.all()
        classes = {}
        for i in allClass:
            classes[i.id] = i.classTime
        return classes

    @app.route('/school/classes/3')
    def getAllClass3():
        allClass = Classes.query.all()
        classes = {}
        for i in allClass:
            classes[i.id] = i.classID
        return classes

    @app.route('/school/classes/4')
    def getAllClass4():
        allClass = Classes.query.all()
        classes = {}
        for i in allClass:
            classes[i.id] = i.classID
        return classes


    @app.route('/enroll', methods=['PUT'])
    def editEnrollment():  # Done, needs to sanitize input.
        # Send json of user and class name
        # Load up all the categories we may use and edit
        contents = request.json
        nm = contents["classname"]
        us = contents["username"]

        courses = Classes.query.all()
        print(nm)


        clss = {}
        for i in courses:
            if i.classID == nm:
                targetClassNum = i.enrolledNum
                targetClassMax = i.maxEnrollment

        # json.loads(contents) #Sanitizer, gives error at the moment.

        # Check if we have space!

        if (targetClassNum < targetClassMax):
            # Perform the logic here
            # Upon successful checking of space, we can now add the student to the class. This should be done in enrollment, where we have classID, userID, and grade.
            newClassEntry = Enrollment(classID=nm, userID=us, grade=100.0)
            db.session.add(newClassEntry)
            db.session.commit()
            # Now we need to update the enrollmentNum in Classes.
            # Retrieve the class by using classID as the filter.
            newClassNum = db.session.query(Classes).filter(Classes.classID == nm).one()
            newClassNum.enrollNum = targetClassNum+1
            print(newClassNum.enrollNum)
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
        teacher = Teacher.query.all()
        contents = request.get_json(silent=True)
        newGrade = Enrollment.query.filter_by(classID=contents["classname"], userID=contents["username"]).update(
            dict(grade=contents["grades"]))
        db.session.commit()
        return "success"


    @app.route('/<string:username>/teacherClass', methods=['GET'])
    def getTeacherClass(username):
        userTeacher = Teacher.query.filter_by(userID=username).first()
        result = db.session.execute(db.select(Classes.classID).where(Classes.teacherName == userTeacher.teacherName))
        # print(type(result.all()))
        # Create a dictionary that shows all classes that the student has.
        classDictionary = [dict(r) for r in result.all()]
        for classDict in classDictionary:
            return classDict["classID"]
        return ""


    @app.route('/<string:username>/<string:classname>/studentGrades', methods=['GET]'])
    def getStudentGrades(username, classname):
        userTeacher = Teacher.query.filter_by(userID=username).first()  # Targets the teacher with the same ID.
        targetClass = Classes.query.filter_by(classID=classname).first()  # Finds the class that has the same ID/name.
        targetEnrollment = Enrollment.query.filter_by(classID=targetClass.classID)
        # We want to pull all of the student's grades from the classes that the teacher will teach.


    @app.route('/fillUsername', methods=['PUT'])
    def filluser():
        return currenUser

    @app.route('/login', methods=['POST', 'GET'])
    def login():
        if request.method == 'POST':
            session.pop('Username', None)
            name = request.form['usn']
            pswd = request.form['psw']

            allUsers = User.query.all()
            users = {}
            passF = 0
            nameF = 0
            teacher = 0

            for i in allUsers:
                users[i.name] = i.name
                users[i.userID] = i.userID
                users[i.password] = i.password
                users[i.isStudent] = i.isStudent

            for i in allUsers:
                if users[i.userID] == name:
                    if users[i.password] == pswd:
                        if users[i.isStudent]:
                            fullname = str(users[i.name])
                            currenUser = fullname
                            session['Username'] = fullname
                            return render_template('profile.html', name=fullname)
                    else:
                        passF = 1
                else:
                    nameF = 1

            for i in allUsers:
                if users[i.userID] == name:
                    if users[i.password] == pswd:
                        if not users[i.isStudent]:
                            return render_template('Add.html', name=users[i.name])

            if nameF == 1:
                return render_template('login.html', info="wrong Username")

            if passF == 2:
                return render_template('login.html', info="wrong Password")

        if request.method == 'GET':
            if "Username" in session:
                usr = session["Username"]
                return usr

if __name__ == "__main__":
    app.run(debug=True)
