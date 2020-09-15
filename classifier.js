

import BayesClassifier from 'bayes-classifier'
import * as symptomData from './dataArray.js'

var classifier = new BayesClassifier()

classifier.addDocuments(symptomData.tbSymptoms, `Tuberculosis`)
classifier.addDocuments(symptomData.dengueSymptoms, `Dengue`)
classifier.addDocuments(symptomData.diarrhoeaSymptoms, `Diarrhoea`)
classifier.addDocuments(symptomData.jaundiceSymptoms, `Jaundice`)
classifier.addDocuments(symptomData.malariaSymptoms, `Malaria`)
classifier.addDocuments(symptomData.diabetesSymptoms, `Diabetes`)
classifier.addDocuments(symptomData.pneumoniaSymptoms, `Pneumonia`)
classifier.addDocuments(symptomData.kidneystoneSymptoms, `Kidney Stone`)
classifier.addDocuments(symptomData.covid19Symptoms, `Covid - 19`)
classifier.addDocuments(symptomData.viralfeverSypmtoms, `Viral Fever`)

classifier.train()

export function foutput(message){
	let result =  classifier.getClassifications(message)
	return result; 
}







