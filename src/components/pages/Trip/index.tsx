import styles from './styles/trip.module.scss'
import BaseButton from '@/components/global/BaseButton'
import { ReactComponent as GoBack } from '@/assets/icons/arrowBack.svg'
import { PropsInterface } from './types'
import moment from 'moment/moment'

const Trip = ({
  departurePoint,
  destination,
  date,
  deleteTrip,
  tripGoBack,
  onClick,
  onGoBack,
  businessClass,
  index
}: PropsInterface) => {
  let newDate = ''
  if (date) {
    newDate = moment(date).format('DD/MM/YYYY HH:MM')
  }

  return (
    <>
      <div className={styles.trip}>
        <div className={styles.tripWrap}>
          <div className={styles.tripNum}>Trip {index ? index : ''}</div>
          <div className={styles.tripDest}>
            {departurePoint} - {destination}
          </div>
        </div>

        <div className={styles.dateWrap}>
          {tripGoBack && (
            <div className={styles.tripClass}>
              {businessClass ? 'business' : 'comfort'}
            </div>
          )}
          <div className={styles.tripDate}>{newDate}</div>
        </div>
        {tripGoBack && (
          <div className={styles.wrapGoBack}>
            <BaseButton
              variant='clear'
              className={styles.btnGoBack}
              onClick={onGoBack}
            >
              <GoBack width={40} height={40} />
            </BaseButton>
          </div>
        )}
        {deleteTrip && (
          <div className={styles.btnWrap}>
            <BaseButton className={styles.btnDelete} onClick={onClick}>
              &#10006;
            </BaseButton>
          </div>
        )}
      </div>

      <hr className={styles.tripHr} />
    </>
  )
}

export default Trip
