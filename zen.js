// 1.db.student.find({},{topics:1,tasks:1})
// 2.db.student.find({company_drives:{$gt:"15-10-2020",$lt:"31-10-2020"}})
// 3.db.student.find({},{_id:0,company_name:1,student_id_list:1})
// 4.db.student.find({},{users:1,codekata:1,_id:0})
// 5.db.student.find({$match:{date:{$gte:"15-10-2020",$lt:"31-10-2020"}}},{$project:{_id:0,date:1,no_of_absent:{$size:"$absent"}}})
