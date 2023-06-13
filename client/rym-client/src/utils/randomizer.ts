import { pronouns,adjectives, adverbs, nouns, pronombres, 
    adjetivos, sustantivos, adverbios} from "./data";

interface EmailFormat {
    pronoun: string;
    noun: string;
    adverb: string;
    adjective: string;
    // grade: string;
}

class EmailFormat implements EmailFormat {
    constructor(
      public pronoun: string,
      public noun: string,
      public adverb: string,
      public adjective: string,
    //   public grade: string,
      
    ) {}
    getRandomIndex = (length: number) => {
    return Math.floor(Math.random()* length) 
    }
    getUpperCaseChar = (word: string) =>{
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }
  }

const getRandomName = (lenguage:string) => {
    const emailFormat = new EmailFormat('', '', '', '');

if(lenguage === "ENG"){
    const pronResult = emailFormat.getRandomIndex(pronouns.length);
    const nounResult = emailFormat.getRandomIndex(nouns.length);
    const advResult = emailFormat.getRandomIndex(adverbs.length);
    const adjResult = emailFormat.getRandomIndex(adjectives.length);
    // const gradeResult = emailFormat.getRandomIndex(numbers.length);

        const newEmail = new EmailFormat(
        pronouns[pronResult],
        nouns[nounResult],
        adverbs[advResult],
        adjectives[adjResult],
        // numbers[gradeResult]
    )
   
    newEmail.pronoun = emailFormat.getUpperCaseChar(newEmail.pronoun);
    newEmail.noun = emailFormat.getUpperCaseChar(newEmail.noun);
    newEmail.adverb = emailFormat.getUpperCaseChar(newEmail.adverb);
    newEmail.adjective = emailFormat.getUpperCaseChar(newEmail.adjective);
    // newEmail.grade = emailFormat.getUpperCaseChar(newEmail.grade.toString());

    const fusionProps = newEmail.pronoun + newEmail.noun + newEmail.adverb + newEmail.adjective;
    return fusionProps;

}
//'SPA'
    const pronResult = emailFormat.getRandomIndex(pronombres.length);
    const nounResult = emailFormat.getRandomIndex(sustantivos.length);
    const advResult = emailFormat.getRandomIndex(adverbios.length);
    const adjResult = emailFormat.getRandomIndex(adjetivos.length);
    // const gradeResult = emailFormat.getRandomIndex(numeros.length);

    const newEmail2 = new EmailFormat(
        pronombres[pronResult],
        sustantivos[nounResult],
        adverbios[advResult],
        adjetivos[adjResult],
        // numeros[gradeResult]
        )
        newEmail2.pronoun = emailFormat.getUpperCaseChar(newEmail2.pronoun);
        newEmail2.noun = emailFormat.getUpperCaseChar(newEmail2.noun);
        newEmail2.adverb = emailFormat.getUpperCaseChar(newEmail2.adverb);
        newEmail2.adjective = emailFormat.getUpperCaseChar(newEmail2.adjective);
      

        const fusionProps = newEmail2.pronoun + newEmail2.noun + newEmail2.adverb + newEmail2.adjective;
    return fusionProps;

}

export default getRandomName;





