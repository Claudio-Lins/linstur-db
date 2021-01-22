import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";

const ModalExample = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container className="flex justify-center">
      <div className="flex">
        <button className='text-center' onClick={toggle}>
          <Image
           src="/icons/euro.svg" 
           alt="Cash" 
           width={80} 
           height={80} />
        </button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <h2 className="font-light">Entradas</h2>
        </ModalHeader>
        <ModalBody>
          <Container>
            <div className="flex justify-center items-center py-4">
              <input
                className="text-center text-3xl text-black py-4"
                type="text"
                placeholder="€"
              />
            </div>
            <div className="flex justify-evenly md:justify-center md:space-x-4 mt-10">
              <div>
                <button
                  className="hover:opacity-50"
                  type="submit"
                >
                  <Image src="/plataformas/Uber.svg" alt="Cash" width={50} height={50} />
                </button>
              </div>
              <div>
                <button
                  className="hover:opacity-50"
                  type="submit"
                >
                  <Image src="/plataformas/Bolt.png" alt="Cash" width={50} height={50} />
                </button>
              </div>
              <div>
                <button
                  className="hover:opacity-50"
                  type="submit"
                >
                  <Image src="/plataformas/FreeNow.svg" alt="Cash" width={50} height={50} />
                </button>
              </div>
              <div>
                <button
                  className="hover:opacity-50"
                  type="submit"
                >
                  <Image src="/plataformas/UberEats.svg" alt="Cash" width={50} height={50} />
                </button>
              </div>
              <div>
                <button
                  className="hover:opacity-50"
                  type="submit"
                >
                  <Image src="/plataformas/Cash.svg" alt="Cash" width={50} height={50} />
                </button>
              </div>
            </div>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Enviar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ModalExample;
