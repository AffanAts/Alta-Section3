import Header from './header';
import "./style.css"
import { listTodo } from './Component/todo';

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <ul>
                {listTodo.map((listTodo) => (
                        <li key={listTodo.id} className={listTodo.completed === false && "lineThrough"}>{listTodo.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home;