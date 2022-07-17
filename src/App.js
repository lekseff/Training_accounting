import { useState } from 'react';
import Form from './components/Form/Form';
import TrainingList from './components/TrainingList/TrainingList';
import './css/App.css';

function App() {
    const [allTraining, setAllTraining] = useState([]);

    const [form, setForm] = useState({
        date: '',
        distance: '',
    });

    const changeForm = ({ name, value }) => {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const addTraining = (newTraining) => {
        const isRepeat = allTraining.find(
            (training) => training.date === newTraining.date
        );

        if (isRepeat) {
            isRepeat.distance += newTraining.distance;
            setAllTraining([...allTraining]);
        } else {
            setAllTraining(
                [...allTraining, newTraining].sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                )
            );
        }
        setForm({ date: '', distance: '' });
    };

    const editTraining = (training) => {
        const { date, distance } = training;
        removeTraining(training);
        setForm({ date, distance });
    };

    const removeTraining = (training) => {
        setAllTraining(allTraining.filter((item) => item.id !== training.id));
    };

    return (
        <div className='training'>
            <h1 className='training__title'>Учет тренировок</h1>
            <Form
                form={form}
                addTraining={addTraining}
                changeForm={changeForm}
            />
            <TrainingList
                allTraining={allTraining}
                editTraining={editTraining}
                removeTraining={removeTraining}
            />
        </div>
    );
}

export default App;
