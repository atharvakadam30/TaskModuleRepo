import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import {
  Avatar,
  Box,
  Popover,
  Stack,
  Tooltip,
  Typography,
  styled
} from '@mui/material';
import { FC, MouseEvent, useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'src/theme/ThemeProvider';

const ThemeSettingsButton = styled(Box)(
  ({ theme }) => `
          // position: fixed;
           z-index: 9999;
          right: ${theme.spacing(7)};
          top: ${theme.spacing(2.5)};
          
          // &::before {
          //     width: 30px;
          //     height: 30px;
          //     content: ' ';
          //     position: absolute;
          //     border-radius: 100px;
          //     left: 13px;
          //     top: 13px;
          //     background: ${theme.colors.primary.main};
          //     // animation: ripple 1s infinite;
          //     transition: ${theme.transitions.create(['all'])};
          // }

          .MuiSvgIcon-root {
            animation: pulse 1s infinite;
            transition: ${theme.transitions.create(['all'])};
          }
  `
);

const ThemeToggleWrapper = styled(Box)(
  ({ theme }) => `
          padding: ${theme.spacing(2)};
          min-width: 220px;
  `
);

const ButtonWrapper = styled(Box)(
  ({ theme }) => `
        cursor: pointer;
        position: relative;
        border-radius: ${theme.general.borderRadiusXl};
        padding: ${theme.spacing(0.8)};
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-width: 80px;
        box-shadow: 0 0 0 2px ${theme.colors.primary.lighter};

        &:hover {
            box-shadow: 0 0 0 2px ${theme.colors.primary.light};
        }

        &.active {
            box-shadow: 0 0 0 2px ${theme.palette.primary.main};

            .colorSchemeWrapper {
                opacity: .6;
            }
        }
  `
);

const ColorSchemeWrapper = styled(Box)(
  ({ theme }) => `

    position: relative;

    border-radius: ${theme.general.borderRadiusXl};
    height: 28px;
    
    &.colorSchemeWrapper {
        display: flex;
        align-items: stretch;
        width: 100%;

        .primary {
            border-top-left-radius: ${theme.general.borderRadiusXl};
            border-bottom-left-radius: ${theme.general.borderRadiusXl};
        }

        .secondary {
            border-top-right-radius: ${theme.general.borderRadiusXl};
            border-bottom-right-radius: ${theme.general.borderRadiusXl};
        }

        .primary,
        .secondary,
        .alternate {
            flex: 1;
        }
    }

    &.pureLight {
        .primary {
            background: #f9b96a;   
        }
    
        .secondary {
            background: #f2f5f9;
        }
    }

    &.greyGoose {
        .primary {
            background: #6ec8f9;
        }
    
        .secondary {
            background: #F8F8F8;
        }
    }
    
    &.purpleFlow {
        .primary {
         
            background: white;
        }
    
        .secondary {
          background: gray;
        }
    }
    
    &.nebulaFighter {
        .primary {
            background: #8C7CF0;
        }
    
        .secondary {
            background: #070C27;
        }
    }

    &.greenFields {
        .primary {
            background: #44a574;
        }
    
        .secondary {
            background: #141c23;
        }
    }

    &.darkSpaces {
        .primary {
            background: #CB3C1D;
        }
    
        .secondary {
            background: #1C1C1C;
        }
    }

  `
);

const CheckSelected = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.success.main};
    border-radius: 50px;
    height: 26px;
    width: 26px;
    color: ${theme.palette.success.contrastText};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -13px 0 0 -13px;
    z-index: 5;

    .MuiSvgIcon-root {
        height: 16px;
        width: 16px;
    }

  `
);

const ThemeSettings: FC = () => {
  const { t }: { t: any } = useTranslation();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const setThemeName = useContext(ThemeContext);
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';

  const [theme, setTheme] = useState(curThemeName);

  const changeTheme = (theme): void => {
    setTheme(theme);
    setThemeName(theme);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeSettingsButton>
        <Tooltip arrow title={t('Theme Settings')}>
          <Avatar
            ref={ref}
            onClick={handleOpen}
            sx={{ backgroundColor: '#90caf9', width: 35, height: 35 }}
            variant="rounded"
            aria-label="add"
          >
            <SettingsTwoToneIcon fontSize="small" />
          </Avatar>
        </Tooltip>
        <Popover
          disableScrollLock
          anchorEl={ref.current}
          onClose={handleClose}
          open={isOpen}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <ThemeToggleWrapper>
            <Typography
              sx={{
                mt: 1,
                mb: 3,
                textAlign: 'center',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
              variant="body1"
            >
              Light color schemes
            </Typography>
            <Stack alignItems="center" spacing={2}>
              <Tooltip placement="left" title="Pure Light" arrow>
                <ButtonWrapper
                  className={theme === 'PureLightTheme' ? 'active' : ''}
                  onClick={() => {
                    changeTheme('PureLightTheme');
                  }}
                >
                  {theme === 'PureLightTheme' && (
                    <CheckSelected>
                      <CheckTwoToneIcon />
                    </CheckSelected>
                  )}
                  <ColorSchemeWrapper className="colorSchemeWrapper pureLight">
                    <Box className="primary" />
                    <Box className="secondary" />
                  </ColorSchemeWrapper>
                </ButtonWrapper>
              </Tooltip>
              <Tooltip placement="left" title="Grey Goose" arrow>
                <ButtonWrapper
                  className={theme === 'GreyGooseTheme' ? 'active' : ''}
                  onClick={() => {
                    changeTheme('GreyGooseTheme');
                  }}
                >
                  {theme === 'GreyGooseTheme' && (
                    <CheckSelected>
                      <CheckTwoToneIcon />
                    </CheckSelected>
                  )}
                  <ColorSchemeWrapper className="colorSchemeWrapper greyGoose">
                    <Box className="primary" />
                    <Box className="secondary" />
                  </ColorSchemeWrapper>
                </ButtonWrapper>
              </Tooltip>
              <Tooltip placement="left" title="Purple Flow" arrow>
                <ButtonWrapper
                  className={theme === 'PurpleFlowTheme' ? 'active' : ''}
                  onClick={() => {
                    changeTheme('PurpleFlowTheme');
                  }}
                >
                  {theme === 'PurpleFlowTheme' && (
                    <CheckSelected>
                      <CheckTwoToneIcon />
                    </CheckSelected>
                  )}
                  <ColorSchemeWrapper className="colorSchemeWrapper purpleFlow">
                    <Box className="primary" />
                    <Box className="secondary" />
                  </ColorSchemeWrapper>
                </ButtonWrapper>
              </Tooltip>
            </Stack>
          </ThemeToggleWrapper>
        </Popover>
      </ThemeSettingsButton>
    </>
  );
};

export default ThemeSettings;
