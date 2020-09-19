import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import HelloWorld from './HelloWorld';
import DetailsGeneric from './DetailsGeneric';
import DetailsSpecific from './DetailsSpecific';
import Modal from './Modal';

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <React.StrictMode>
            <main className="app-main">
                <aside className="app-sidebar">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/details/1">Details 1</Link>
                            </li>
                            <li>
                                <Link to="/details/2">Details 2</Link>
                            </li>
                            <li>
                                <Link to="/details/3">Details 3</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section className="app-content">
                    <Router>
                        <HelloWorld path="/" />
                        <DetailsGeneric path="/details/:id" />
                        <DetailsSpecific path="/details/1" />
                    </Router>
                </section>
                <button onClick={(e) => setModalOpen(true)}>Open Modal</button>
                {modalOpen && (
                    <Modal>
                        <p>Modal Content!</p>
                        <button onClick={(e) => setModalOpen(false)}>
                            Close Modal
                        </button>
                    </Modal>
                )}
            </main>
        </React.StrictMode>
    );
};

export default App;
