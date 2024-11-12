// export const allImages = import.meta.glob('./assets/*.png')

// for (const img in allImages) {
//     allImages[img]().then((smth) => {
//         console.log(img, smth)
//         console.log(`key img: ${img}`);
//         console.log(allImages);
//     })
// }

interface IStoreConfig {
    price: number,
    name: string
}

export const storeConfig: IStoreConfig[] = [
    {
        name: 'Dom Casmurro',
        price: 50
    },
    {
        name: 'The power of habit',
        price: 60,
    },
    {
        name: 'O menino maluquinho',
        price: 70
    },
    {
        name: 'a hora de estrela',
        price: 30
    },
    {
        name: 'cidade de deus',
        price: 90
    },
    {
        name: 'macunaima',
        price: 45
    },
    {
        name: 'a bolsa amarela',
        price: 50
    },
    {
        name: 'a arca de noe',
        price: 85
    }
]