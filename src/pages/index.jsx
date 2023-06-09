import Head from 'next/head';
import { NavBar } from '@/components/NavBar';
import { GridCategories } from '@/components/GridCategories';
import { useEffect, useState } from 'react';
import { getItems } from '@/helpers/getItems';

export default function Home() {
  const [items, setItems] = useState([]);
  const [itemsCartMenu, setItemsCartMenu] = useState([]);
  const [viewMenu, setViewMenu] = useState(false);

  const itemsApi = async () => {
    const response = await getItems();
    setItems(response);
  }

  useEffect(() => {
    itemsApi();
  }, [])

  const insertItem = (product) => {
    if (!itemsCartMenu.some((item) => item.id === product.id)) {
      setItemsCartMenu([...itemsCartMenu, { ...product, quantity: 1 }]);
      setViewMenu(true);
    } else {
      setItemsCartMenu(itemsCartMenu.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      setViewMenu(true);
    }
  }

  const buttons = {
    view: () => setViewMenu(!viewMenu),
    add: (product) => setItemsCartMenu(itemsCartMenu.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
    min: (product) => (product.quantity === 1) ? setItemsCartMenu(itemsCartMenu.filter((item) => item.id !== product.id)) : setItemsCartMenu(itemsCartMenu.map((item) => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)),
    del: (product) => setItemsCartMenu(itemsCartMenu.filter((item) => item.id !== product.id)),
    delAll: () => setItemsCartMenu([])
  }

  return (
    <>
      <Head>
        <title>Fake Store</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./img/favicon.ico" />
      </Head>
      <NavBar viewMenu={viewMenu} itemsCartMenu={itemsCartMenu} buttons={buttons} />
      <GridCategories items={items} insertItem={insertItem} />
    </>
  )
}