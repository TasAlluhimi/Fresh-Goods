import './App.css'
import Header from './components/Header'
import Offer from './components/Offer'
import a from './assets/a.png'
import b from './assets/b.png'
import c from './assets/c.png'
import Quote from './components/Quote'
import Feature from './components/Feature'
import baking from './assets/baking.png'
import box from './assets/box.png'
import coffee from './assets/coffee.png'
import More from './components/More'
import FinalCall from './components/FinalCall'
import MyFooter from './components/MyFooter'


function App() {

  return (
    <>
      <Header />

      <div className='text-center mt-32'>
        <div>
          <p className="text-4xl text-green-950" style={{ overflow: 'hidden' }}>Here are some of the benefits of your offer</p>
          <p className="mt-5">Explain what makes your product or service great. Talk about features in a way thats highlights the real value People get out of them.</p>

        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
        <Offer src={a} title="Benefit 1" des="For example, restaurants and bakeries could outline the health benefits of theier all-natural ingredients."/>
        <Offer src={c} title="Benefit 2" des="For example, restaurants and bakeries could outline the health benefits of theier all-natural ingredients."/>
        <Offer src={b} title="Benefit 3" des="For example, restaurants and bakeries could outline the health benefits of theier all-natural ingredients."/>
        </div>
      </div>

      <Quote />

      <div className="flex flex-wrap justify-center gap-5 bg-[rgb(245,245,245)] pt-20">
        <Feature src={baking} title="Feature 1" des="For example, restaurants and bakeries could outline the health benefits of theier all-natural ingredients."/>
        <Feature src={box} title="Feature 2" des="For example, restaurants and bakeries could outline the health benefits of theier all-natural ingredients."/>
        <Feature src={coffee} title="Feature 3" des="For example, restaurants and bakeries could outline the health benefits of theier all-natural ingredients."/>
        </div>

        <More />

        <FinalCall />

        <MyFooter />
    </>
  )
}

export default App
