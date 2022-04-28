import React from "react";
import styles from './formItemText.module.scss';
import InputMask from "react-input-mask";
import classNames from 'classnames';
import { FormItemTextProps } from 'CustomPropsTypes';

function FormItemText(props: FormItemTextProps) {
    let className: string = styles["form-item"];

    if (props.isNarrow) {
        className = classNames(styles["form-item"], styles["form-item-narrow"])
    }

    return (
        <div className={className}>
            <label htmlFor={props.id}>
                {
                    props.label && 
                    <span>{props.label} {props.required ? <span>*</span> : <></>}</span>
                }
                {
                    props.mask ? 
                    <InputMask mask={props.mask} placeholder={props.placeholder} /> :
                    <input 
                        type={props.type} 
                        placeholder={props.placeholder} 
                        pattern={props.pattern} 
                        required={props.required}
                        id={props.id}
                    />
                }                
            </label>                                
        </div>
    )
};

export default FormItemText;