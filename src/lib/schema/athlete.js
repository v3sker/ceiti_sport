import * as yup from "yup";

export function getNewAthleteSchema(t) {
  return yup.object().shape({
    name: yup.string()
      .required(t('name.required'))
      .min(3, t('name.min', { value: 3 }))
      .max(50, t('name.max', { value: 50 })),
    surname: yup.string()
      .required(t('surname.required'))
      .min(3, t('surname.min', { value: 3 }))
      .max(50, t('surname.max', { value: 50 })),
    idnp: yup.string()
      .required(t('idnp.required'))
      .min(13, t('idnp.min'))
      .max(13, t('idnp.max')),
    birthdate: yup.object().shape({
      day: yup.string().test(
        'is-valid-day',
        t('birthdate.invalidDay'),
        value => {
          const day = parseInt(value, 10);
          return day >= 1 && day <= 31;
        }
      ),
      month: yup.string().test(
        'is-valid-month',
        t('birthdate.invalidMonth'),
        value => {
          const day = parseInt(value, 10);
          return day >= 1 && day <= 12;
        }
      ),
      year: yup.string().test(
        'is-valid-year',
        t('birthdate.invalidYear'),
        value => {
          const day = parseInt(value, 10);
          return day >= 1900 && day <= 2019;
        }
      )
    }),
    gender: yup.mixed()
      .oneOf(["M","F"]  )
      .required(t('gender.required')),
    height: yup.string().test(
      'is-decimal',
      t('invalidDecimal'),
      value => {
        if (value === undefined || value === null || value === '') return true; // skip if not required
        return /^\d+\.\d+$/.test(value.toString());
      }
    ),
    weight: yup.string().test(
      'is-decimal',
      t('invalidDecimal'),
      value => {
        if (value === undefined || value === null || value === '') return true; // skip if not required
        return /^\d+\.\d+$/.test(value.toString());
      }
    ),
    sport: yup.string()
      .required(t('sport.required')),
  })
}

export const NewAthleteSchema = yup.object().shape({
  name: yup.string()
    .required()
    .min(3)
    .max(50),
  surname: yup.string()
    .required()
    .min(3)
    .max(50),
  idnp: yup.string()
    .required()
    .min(13)
    .max(13),
  birthdate: yup.object().shape({
    day: yup.string().test(
      'is-valid-day',
      'is-valid-day',
      value => {
        const day = parseInt(value, 10);
        return day >= 1 && day <= 31;
      }
    ),
    month: yup.string().test(
      'is-valid-month',
      '',
      value => {
        const day = parseInt(value, 10);
        return day >= 1 && day <= 12;
      }
    ),
    year: yup.string().test(
      'is-valid-year',
      '',
      value => {
        const day = parseInt(value, 10);
        return day >= 1900 && day <= 2019;
      }
    )
  }),
  gender: yup.mixed()
    .oneOf(["M","F"])
    .required(),
  height: yup.string().test(
    'is-decimal',
    '',
    value => {
      if (value === undefined || value === null || value === '') return true; // skip if not required
      return /^\d+\.\d+$/.test(value.toString());
    }
  ),
  weight: yup.string().test(
    'is-decimal',
    '',
    value => {
      if (value === undefined || value === null || value === '') return true; // skip if not required
      return /^\d+\.\d+$/.test(value.toString());
    }
  ),
  sport: yup.string()
    .required(''),
})