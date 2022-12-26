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
    { id: 1, url: "https://picsum.photos/id/100/200/200" },
    { id: 1, url: "https://picsum.photos/id/200/200/200" },
    { id: 1, url: "https://picsum.photos/id/300/200/200" },
    { id: 1, url: "https://picsum.photos/id/400/200/200" },
    { id: 1, url: "https://picsum.photos/id/500/200/200" },
  ])

  const [pos, setPos] = useState(0);

  const [show, setShow] = useState(false);

  let divRef = useRef();
  let inputNameRef = useRef()

  let name2Ref = useRef();

  let imgRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.width = '70px';
      divRef.current.style.height = '70px';
      divRef.current.style.borderRadius = '50px';
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


  const selectImage = (img, pos) => {
    imgRef.current.src = img.url;
    setPos(pos);
  }

  return (
    <>
      <div className='poste mx-auto'></div>
      <div className='container py-3'>
        <div className='mx-auto' ref={divRef}></div>
      </div>
      <button onClick={cambiarColor}>Cambiar Color</button>
      <input type="text" id="name1" ref={inputNameRef} defaultValue="Hola" />
      <button onClick={capturarValor}>Capturar Valor</button>

      <input type="text" id="name2" ref={(input) => name2Ref = input} />
      <button onClick={capturarValor2}>Capturar Valor</button>

      <div className="d-flex w-100 flex-row">
        {
          images.map((img, index) => {
            let style = index === pos ? { border: '1px solid red'} : { border: '1px solid black'}
            return (
              <div className="card m-1" key={index}>
                <img src={img.url} alt="" width={50} height={50} onClick={() => selectImage(img, index)} style={style} />
              </div>
            )
          })
        }
      </div>
      <img height={300} width={300} ref={imgRef} src={images[pos].url} />
      <div className="button-group my-2">
      <button className="btn btn-info btn-sm m-1" onClick={() => setPos(pos => pos === 0 ? images.length - 1 : pos - 1)}>prev</button>
      <button className="btn btn-info btn-sm m-1" onClick={() => setPos(pos => pos === images.length - 1 ? 0 : pos + 1)}>next</button> 
      </div>

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
