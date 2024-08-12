import './style.css'

type Props = {
  image: string;
}

export const BackgroundSettingsCard = ({ image }: Props) => {

  return (
    <div className="background-settings-card">
      <img src={image} className="background-settings-preview" alt="Current-Background-Settings-Origin" />

      <div className='relative background-settings-preview'>
        <div style={{ zIndex: 2 }} className='background-settings-preview background-preview-filters absolute left-0 top-0 preview-filter'/>
        <img src={image} className="background-settings-preview absolute left-0 top-0" alt="Current-Background-Settings-Processed" />
      </div>
    </div>
  )
}