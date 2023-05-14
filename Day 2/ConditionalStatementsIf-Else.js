function getGrade(score) {
    let grade;
    let asciValue = 71-score/5;
    grade=String.fromCharCode(asciValue);
    return grade;
}