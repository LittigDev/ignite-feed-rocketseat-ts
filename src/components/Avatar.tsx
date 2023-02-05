import styles from './Avatar.module.css';

interface IAvatar {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ src, hasBorder=true, alt}: IAvatar) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
            alt={alt}
        />
    );
}