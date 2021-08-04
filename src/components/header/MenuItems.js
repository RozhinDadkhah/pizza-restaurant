import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CakeIcon from '@material-ui/icons/Cake';

export const MenuItems = [
    {
        title: 'پیتزا',
        path: '/pizza',
        cName: 'dropdown-link',
        icon: <LocalPizzaIcon />
    },
    {
        title: 'برگر',
        path: '/burger',
        cName: 'dropdown-link',
        icon: <FastfoodIcon />
    },
    {
        title: 'سالاد',
        path: '/salad',
        cName: 'dropdown-link',
        icon: <FavoriteBorderIcon />
    },
    {
        title: 'دسر',
        path: '/dessert',
        cName: 'dropdown-link',
        icon: <CakeIcon />
    }
]