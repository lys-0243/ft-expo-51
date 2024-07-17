import Assistance from "@/app/(drawer)/assistance";

export const appRoutes = {
    onboard: "onboarding",
    login: "signin",
    signup: "signup",
    otp: "otpcode",
    successSignUp: "signup_success",
    userFav: "user_preferences",
  };
  
  export const authRoutes = {
    home: "home",
    chat: "chat",
    community: "community",
    president: "president",
    userProfile: "profile",
    newContent: "newContent",
  };
  
  export const drawerRoutes = {
    home: "(tabs)",
    assistance: "assistance",
    ministeres: "ministeres",
    ressources: "ressources",
    offres: "offres",
    guichet: "guichet",
    petitions: "petitions",
    news: "news",
  };
  
  export const screenTitles = {
    home: "Accueil",
    news: "Actualités",
    petition: "Pétitions",
    ministere: "Ministères",
    ressources: "Ressources",
    offre: "Offres",
    guichet: "Guichet Unique",
    assistance: "Assistance",
  };