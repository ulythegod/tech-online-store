import React, { ReactElement } from 'react';
import styles from './productSpecs.module.scss';
import { Spec } from '../../CustomTypes';

type Props = {
    specs: Spec[]
}

function ProductSpecs(props: Props) {
    const specsItems: ReactElement<any, any>[] = props.specs.map((spec: any, id: number) => {
        return (
            <tr key={id} className={(id % 2) ? styles["dark"] : ``}>
                <td>{spec.spec}</td>
                <td>{spec.value}</td>
            </tr>
        )
    });   

    return (
        <div className={styles["features"]}>
            <table>
                <tbody>
                    {specsItems}
                </tbody>
            </table>
        </div>
    );
}

export default ProductSpecs;