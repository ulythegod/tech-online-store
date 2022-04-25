import React from 'react';
import styles from './catalogDescription.module.scss';
import StoreButton from '../Buttons/StoreButton';

function CatalogDescription() {
    return (
        <div className={styles["catalog-description"]}>
            <p className={styles["description-text"]}>
                MSI has unveiled the Prestige Series line of business-class 
                and gaming notebooks. Tuned for color accuracy, the Prestige 
                Series also leverages True Color Technology, which allows 
                users to adjust the display profile to best fit their computing 
                needs.<br />
                <br />
                There are six different screen profiles, which are tuned for gaming, 
                reducing eye fatigue, sRGB color accuracy, increasing clarity for 
                words and lines, reducing harmful blue light, and optimizing 
                contrast for watching movies.<br />
                <br />
                Given the various display profiles and discrete graphics chip, the 
                Prestige Series notebooks can be used for various design work as 
                well as for office tasks given that the screen can be adjusted 
                for better clarity, color accuracy, or for eye strain reduction. 
                Users working with video or 3D rendering will appreciate the "
                movie mode" for which contrast is increased.
            </p>
            <StoreButton 
                buttonStyle="grey-button"
                content={"More"}
            />
        </div>
    );
}

export default CatalogDescription;