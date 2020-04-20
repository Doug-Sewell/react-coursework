import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controsl = [
    {label: 'Salad', stype: 'salad'},
    {label: 'Bacon', stype: 'bacon'},
    {label: 'Cheese', stype: 'cheese'},
    {label: 'Meat', stype: 'salad'}]

const buildControls = (props) => (
    <div className={classes.buildControls}>
        {controsl.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);


export default buildControls;