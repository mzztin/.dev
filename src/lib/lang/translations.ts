export interface TranslationValues {
	MAIN_PAGE_FIRST_LINE: string;
	MAIN_PAGE_SECOND_LINE: string;

    ABOUT_LINE: string;
    CONTACT_LINE: string;
    PROJECT_LINE: string;

    FOOTER: string;

    ABOUT_PAGE: {
        TITLE: string;
        GREETING: string;
        INFORMATION: string;
        TECHNOLOGIES: string;
    }
    
    CONTACT_PAGE: {
        TITLE: string;
        EMAIL_INPUT: string;
        MESSAGE_INPUT: string;
        SUBMIT_BUTTON: string;
        OTHER_INFORMATION: string;
    },

    BACK_BUTTON: string;
}

export const GERMAN: TranslationValues = {
	MAIN_PAGE_FIRST_LINE: 'student',
	MAIN_PAGE_SECOND_LINE: 'aufstrebender entwickler',
    ABOUT_LINE: 'über mich',
    CONTACT_LINE: 'kontakt',
    PROJECT_LINE: 'projekte',
    FOOTER: 'von mzztin erstellt',
    ABOUT_PAGE: {
        TITLE: 'über mich',
        GREETING: 'Hällochen!   ',
        INFORMATION: 'Mein Name ist Martin und ich bin zur zeit ein Student der Informatik auf der FH Aachen studiert',
        TECHNOLOGIES: 'technologien'
    },
    CONTACT_PAGE: {
        TITLE: 'kontaktiere mich',
        EMAIL_INPUT: 'email eingeben',
        MESSAGE_INPUT: 'nachricht eingeben',
        SUBMIT_BUTTON: 'abschicken',
        OTHER_INFORMATION: 'oder kontaktiere mich über discord (Martin#6666) oder die anderen sozialen medien auf der home page'
    },
    BACK_BUTTON: 'ZURÜCK'
};

export const ENGLISH: TranslationValues = {
	MAIN_PAGE_FIRST_LINE: 'student',
	MAIN_PAGE_SECOND_LINE: 'aspiring developer',
    ABOUT_LINE: 'about me',
    CONTACT_LINE: 'contact',
    PROJECT_LINE: 'projects',
    FOOTER: 'made by mzztin',
    ABOUT_PAGE: {
        TITLE: 'about me',
        GREETING: 'Hello there!',
        INFORMATION: 'My name is Martin and I am currently a student, studying computer science at FH Aachen',
        TECHNOLOGIES: 'technologies'
    },
    CONTACT_PAGE: {
        TITLE: 'contact me',
        EMAIL_INPUT: 'enter email',
        MESSAGE_INPUT: 'enter message',
        SUBMIT_BUTTON: 'send',
        OTHER_INFORMATION: 'or contact me through discord (Martin#6666) or the other social medias given at the home page'
    },
    BACK_BUTTON: "RETURN"
};
