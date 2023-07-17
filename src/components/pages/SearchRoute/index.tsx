import styles from './styles/searchRoute.module.scss'
import BaseInput from '@/components/global/BaseInput'
import BaseButton from '@/components/global/BaseButton'
import useSearchRoute from './hooks/useSearchRoute.ts'
import BaseCheckbox from '@/components/global/BaseCheckbox'

const SearchRoute = () => {
  const { formControl, error, nowDate, futureDate } = useSearchRoute()

  return (
    <>
      <div className={styles.searchRoute}>
        <form onSubmit={formControl.handleSubmit} className={styles.formTrip}>
          <div className={styles.pointsWrap}>
            <div className={styles.wrapTrip}>
              <BaseInput
                type='text'
                name='departurePoint'
                placeholder='Departure city'
                className={styles.inputSmall}
                onBlur={formControl.handleBlur}
                onChange={formControl.handleChange}
                value={formControl.values.departurePoint}
                errorText={
                  formControl.touched.departurePoint &&
                  formControl.errors.departurePoint
                    ? formControl.errors.departurePoint
                    : ''
                }
              />
            </div>
            <div className={styles.wrapTrip}>
              <BaseInput
                type='text'
                name='destination'
                placeholder='Destination city'
                className={styles.inputSmall}
                onBlur={formControl.handleBlur}
                onChange={formControl.handleChange}
                value={formControl.values.destination}
                errorText={
                  formControl.touched.destination &&
                  formControl.errors.destination
                    ? formControl.errors.destination
                    : ''
                }
              />
            </div>
          </div>
          <div className={styles.dateWrap}>
            <BaseInput
              name='date'
              type='datetime-local'
              min={nowDate}
              max={futureDate}
              className={styles.inputBig}
              onBlur={formControl.handleBlur}
              onChange={formControl.handleChange}
              value={formControl.values.date}
              errorText={
                formControl.touched.date && formControl.errors.date
                  ? formControl.errors.date
                  : ''
              }
            />
          </div>
          <div className={styles.dateWrap}>
            <BaseInput
              name='numberOfPassengers'
              type='number'
              step='1'
              min='1'
              max='8'
              placeholder='Number of passengers (from 1 to 8)'
              className={styles.inputBig}
              onBlur={formControl.handleBlur}
              onChange={formControl.handleChange}
              value={formControl.values.numberOfPassengers}
              errorText={
                formControl.touched.numberOfPassengers &&
                formControl.errors.numberOfPassengers
                  ? formControl.errors.numberOfPassengers
                  : ''
              }
            />
          </div>
          <div className={styles.switchWrap}>
            <BaseCheckbox
              name='private'
              onBlur={formControl.handleBlur}
              control={<BaseCheckbox checked={formControl.values.private} />}
              onChange={formControl.handleChange}
            />
            <div className={styles.private}>
              {formControl.values.private ? 'Business' : 'Comfort'}
            </div>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.btnWrap}>
            <BaseButton
              className={styles.btnSubmit}
              variant='dark'
              type='submit'
            >
              Submit
            </BaseButton>
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchRoute
