import { proxy } from 'valtio';


const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './fashionista.png',
    fullDecal: './fashionista.png'
});

export default state;