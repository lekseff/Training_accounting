import TrainingListHeader from '../TrainingListHeader/TrainingListHeader';
import TrainingItem from '../TrainingItem/TrainingItem';

function TrainingListItems(props) {
    const items = props.allTraining.map((training) => (
        <TrainingItem
            training={training}
            key={training.id}
            editTraining = {props.editTraining}
            removeTraining={props.removeTraining}
        />
    ));
    return (
        <div className='training__list-box'>
            <TrainingListHeader />
            {items}
        </div>
    );
}

export default TrainingListItems;


