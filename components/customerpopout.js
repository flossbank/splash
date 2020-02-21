import styles from '../public/styles/customerpopout.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Dialog } from '@reach/dialog'
import '../public/styles/reach-styles/dialog.scss'

const CustomerPopout = props => {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <>
      <div
        className={`${styles.wrapper} ${styles[props.position]}`}
        tabIndex='0'
        onClick={open}
      >
        {props.children[0]}
        {props.children[1]}
      </div>
      <Dialog isOpen={showDialog} onDismiss={close} className={styles.dialog} aria-label='Dialog to lead to user portals'>
        <button className={styles.close} onClick={close}>
          <FontAwesomeIcon icon={faTimes} aria-hidden />
        </button>
        {props.children}
      </Dialog>
    </>
  )
}

export default CustomerPopout
