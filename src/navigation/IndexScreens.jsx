//screens
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Chapters from '../components/Chapters/Chapters';
import Mangas from '../screens/MangaRead/MangaRead';
import MangaDetails from '../screens/MangaDetails/MangaDetails';


//SI LA PANTALLA QUE QUIERO AGREGAR NECEISTO MOSTRARLA EN EL DRAWER, TENGO QUE AGREGARLA EN EL activeUserDrawer Y EL activeUser.
//SI LA PANTALLA QUE QUIERO AGERGAR NO TENGO QUE MOSTRARLA EN EL DRAWER, TENGO QUE AGERGARLA SOLO EN activeUser

//AGREGAR PANTALLAS QUE NECESITO MOSTRAR EN EL DRAWER DE USUARIO ACTIVO
export const activeUserDrawer = [
    {
        component: Mangas,
        name: "Mangas"
    },
  
]

//AGREGAR PANTALLAS QUE NECESITO DE USUARIO ACTIVO
export const activeUser = [
    {
        component: Chapters,
        name: "chapters"
    },
    {
        component: Mangas,
        name: "Mangas"
    },
    {
        component: MangaDetails,
        name: "Details"
    },
]

//pantallas de usuario no activo
export const noActiveUser = [
    {
        component: Login,
        name: "Login"
    },
    {
        component: Register,
        name: "Register"
    },
  
]