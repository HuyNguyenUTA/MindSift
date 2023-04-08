import styles from '../../styles/Home.module.scss'

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputField({label, value, onChange}: InputFieldProps){
    return(
        <form className={styles.form}>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type="text" value={value} onChange={onChange} placeholder='Typing ...'/>
            <button className={styles.submitButton} type='submit'>Sift</button>
        </form>
    )
}