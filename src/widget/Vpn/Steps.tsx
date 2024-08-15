import Box from "~/shared/ui/Box"

type Props = {
  isOpen: boolean
}

export const Steps = ({isOpen}: Props) => {

  return (
    <Box>

      <Box className={`step-1 ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
        <Box display="flex" justifyContent='space-between' alignItems="center" gap="16px">
          <Box display="flex" justifyContent="center" alignItems="center" className="number-circle">
            <Box padding="16px" className="number-step">1</Box>
          </Box>
          <Box display="flex" flex={1}>
            <button type="button" className='button-apple-style header-right-button font-bold'>Авторизоваться</button>
          </Box>
        </Box>
      </Box>

      <Box className={`link-between-steps link-1-2 ${isOpen ? 'height-60' : 'height-0'}`}></Box>

      <Box className={`step-2 ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
        <Box display="flex" justifyContent='space-between' alignItems="center" gap="16px">
          <Box display="flex" justifyContent="center" alignItems="center" className="number-circle">
            <Box padding="16px" className="number-step">2</Box>
          </Box>
          <Box display="flex" flex={1}>
          <input type="text" name="" id="" className="input-apple-style" placeholder="Ваш ID"/>
          </Box>
        </Box>
      </Box>

      <Box className={`link-between-steps link-2-3 ${isOpen ? 'height-60' : 'height-0'}`}></Box>

      <Box className={`step-3 ${isOpen ? 'opacity-1' : 'opacity-0'}`}>
        <Box display="flex" justifyContent='space-between' alignItems="center" gap="16px">
          <Box display="flex" justifyContent="center" alignItems="center" className="number-circle">
            <Box padding="16px" className="number-step">3</Box>
          </Box>
          <Box display="flex" flex={1}>
            <button type="button" className='button-apple-style header-right-button font-bold'>Войти</button>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}