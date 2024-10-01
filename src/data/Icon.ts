import { Icon} from "leaflet";
import placeholder from '../assets/placeholder.png'
import cart_icon from '../assets/cart_icon.png'
import entertainment_icon from '../assets/entertainment_icon.png'
import res_icon from '../assets/res_icon.png'

const customIcon = new Icon({
  iconUrl: placeholder,
  iconSize: [38, 38] // size of the icon
});

const restaurantIcon = new Icon({
  iconUrl: res_icon,
  iconSize: [38, 38] // size of the icon
});

const entertainmentIcon = new Icon({
  iconUrl: entertainment_icon,
  iconSize: [38, 38] // size of the icon
});

const shoppingIcon = new Icon({
  iconUrl: cart_icon,
  iconSize: [38, 38] // size of the icon
});

export const icon = {
  customIcon,
  restaurantIcon,
  entertainmentIcon,
  shoppingIcon
}