import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

const ComponentA = () => {
  useEffect(() => {
    console.log('Cargando Component A')
    return () => {
      console.log('Eliminando Component A')
    }
  }, [])
  return <h1>Component A</h1>
}

const ComponentB = () => {

  useEffect(() => {
    console.log('Cargando Component B')
    return () => {
      console.log('Eliminando Component B')
    }
  }, [])


  return <h1>Component B</h1>
}

function App() {

  const [images, setImages] = useState([
    "https://picsum.photos/id/100/200/200",
    "https://picsum.photos/id/200/200/200",
    "https://picsum.photos/id/300/200/200",
    "https://picsum.photos/id/400/200/200",
    "https://picsum.photos/id/500/200/200",
  ])

  const [show, setShow] = useState(false);

  let divRef = useRef();
  let inputNameRef = useRef()

  let name2Ref = useRef();

  let imgRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.width = '100px';
      divRef.current.style.height = '100px';
      divRef.current.style.backgroundColor = 'red';
    }
  }, [])

  const cambiarColor = () => {
    divRef.current.style.color = 'white';
  }

  const capturarValor = () => {
    console.log(inputNameRef);
    console.log(inputNameRef.current.value);
  }

  const capturarValor2 = () => {
    console.log(name2Ref);
    console.log(name2Ref.value);
  }


  const selectImage = img => {
    imgRef.current.src = img;
  }

  return (
    <>
      <div ref={divRef}>Hola</div>
      <button onClick={cambiarColor}>Cambiar Color</button>
      <input type="text" id="name1" ref={inputNameRef} defaultValue="Hola" />
      <button onClick={capturarValor}>Capturar Valor</button>

      <input type="text" id="name2" ref={(input) => name2Ref = input} />
      <button onClick={capturarValor2}>Capturar Valor</button>




      <div className="d-flex w-100 flex-row">
        {
          images.map((img, index) => {
            return (
              <div className="card m-1" key={index}>
                <img src={img} alt="" width={50} height={50} onClick={() => selectImage(img)} />
              </div>
            )
          })
        }
      </div>
      <img height={300} width={300} ref={imgRef} src={images[0]} />

      {
        show ? (
          <ComponentA />
        ) : (
          <ComponentB />
        )
      }

      <button onClick={() => setShow(!show)}>{show ? "ocultar" : "mostrar"}</button>
    </>
  );
}

export default App;
