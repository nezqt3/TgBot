import React from "react";
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
    [
        {
          "id": 1,
          "title": "Кроссовки Nike Air Max 270",
          "price": 129.99,
          "description": "Стильные кроссовки Nike Air Max 270 с максимальной амортизацией для комфорта и стиля."
        },
        {
          "id": 2,
          "title": "Смартфон Samsung Galaxy S23 Ultra",
          "price": 1199.99,
          "description": "Флагманский смартфон Samsung Galaxy S23 Ultra с мощным процессором, отличным дисплеем и профессиональной камерой."
        },
        {
          "id": 3,
          "title": "Ноутбук Apple MacBook Pro 14",
          "price": 1999.99,
          "description": "Мощный ноутбук Apple MacBook Pro 14 с  профессиональным дисплеем Retina и длительным временем автономной работы."
        },
        {
          "id": 4,
          "title": "Наушники AirPods Pro",
          "price": 249.99,
          "description": "Беспроводные наушники AirPods Pro с активным шумоподавлением и отличным звучанием."
        },
        {
          "id": 5,
          "title": "Телевизор Samsung QN55Q60A",
          "price": 799.99,
          "description": "Телевизор Samsung QN55Q60A с технологией QLED для  ярких  и  контрастных  изображений."
        },
        {
          "id": 6,
          "title": "Планшет Apple iPad Air 5",
          "price": 599.99,
          "description": "Мощный планшет Apple iPad Air 5 с  ярким  дисплеем  и  широкими  функциональными  возможностями."
        },
        {
          "id": 7,
          "title": "Игровая консоль Sony PlayStation 5",
          "price": 499.99,
          "description": "Игровая консоль Sony PlayStation 5 с  высокой  скоростью  обработки  и  погружающим  геймплеем."
        },
        {
          "id": 8,
          "title": "Кофемашина De'Longhi EC685",
          "price": 299.99,
          "description": "Автоматическая  кофемашина  De'Longhi  EC685  для  приготовления  вкусного  эспрессо  и  капучино."
        }
      ]
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg} = useTelegram()
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    )
}

export default ProductList;