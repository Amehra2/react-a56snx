import React from 'react';



function MedicalTreatmentList (props){

    const MedicalTreatmentListJson = '[{"treatId": 402, "treatCourseId":"02022", "type": "long term", "category": "dementia", "name": "Joseph stevens", "startDate": "01-01-2020"} ,' +

    '[{"treatId": 403, "treatCourseId":"02023", "type": "short term", "category": "knee injury", "name": "James Waterstone", "startDate": "25-04-2020} ,' +

    '[{"treatId": 404, "treatCourseId":"02024", "type": "long term", "category": "epilepsy", "name": "Sarah Mcsweeny", "startDate": "17-01-2021"} ,' +

    '[{"treatId": 405, "treatCourseId":"02025", "type": "long term", "category": "heart patient", "name": "Steve Maxime", "startDate": "19-08-2019"} ,' +

    '[{"treatId": 406, "treatCourseId":"02026", "type": "short term", "category": "hamstring injury", "name": "Amir Raheem", "startDate": "11-11-2019"}]';

    const MedicalTreatmentList = (JSON.parse(MedicalTreatmentListJson));

    
    const treatmentlist = MedicalTreatmentList.map(
      (MedicalTreatment) => <MedicalTreatment treatId= {MedicalTreatment.treatId} treatCourseId= {MedicalTreatment.treatCourseId} type={MedicalTreatment.type} category={MedicalTreatment.category} name={MedicalTreatment.name} startDate={MedicalTreatment.startDate}/>);

      return (
        <div>
          <ul>{treatmentlist}</ul>
          </div>
      );
    
    //li key= {props.treatId} > {props.treatId} {props.treatCourseId} {props.type} {props.category} {props.name} {props.startDate} 
}

export default MedicalTreatmentList;