import Item from '../components/Item'

const Home = () => {
  return (
    <section>
      <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] mx-auto max-w-full p-8 lg:max-w-7xl">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </section>
  )
}

export default Home