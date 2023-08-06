function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (!this.marks) {
        return;
    }
    this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
    if (!this.marks || Object.keys(this.marks).length === 0) {
        return 0;
    }

    const marksArray = Object.values(this.marks);
    const totalMarks = marksArray.reduce((sum, mark) => sum + mark, 0);
    return totalMarks / marksArray.length;
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}
