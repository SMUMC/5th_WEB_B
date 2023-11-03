def find_name(num,nolist,namelist):
    lens = len(nolist)
    result = "?"
    teamname = "?"

    for i in range(lens):
        if nolist[i] == num:
            result = namelist[i]
            if i % 2!=0:
                teamname = "blackpink"
            else:
                teamname = "newjeans"
    return result,teamname

stu_no = [39,14,67,105,32,27,100,55,3]
stu_name = ["민지","로제","하니","제니","다니엘","지수","혜린","리사","혜인"]

while True:
    print(stu_no)
    a = int(input("학생 번호를 입력하세요. (-1은 끝내기) : "))
    if a!=-1:
        print(find_name(a,stu_no,stu_name))
    else:
        break