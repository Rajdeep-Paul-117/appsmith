import type { ReactNode } from "react";
import React from "react";
import { MenuIcons } from "icons/MenuIcons";
import { Colors } from "constants/Colors";
import type { Plugin } from "api/PluginApi";
import ImageAlt from "assets/images/placeholder-image.svg";
import styled from "styled-components";
import type { HTTP_METHOD } from "constants/ApiEditorConstants/CommonApiConstants";
import { HTTP_METHODS_COLOR } from "constants/ApiEditorConstants/CommonApiConstants";
import { PRIMARY_KEY, FOREIGN_KEY } from "constants/DatasourceEditorConstants";
import { Icon } from "@blueprintjs/core";
import { ControlIcons } from "icons/ControlIcons";
import { ReactComponent as ApiIcon } from "assets/icons/menu/api-colored.svg";
import { ReactComponent as CurlIcon } from "assets/images/Curl-logo.svg";
import { ReactComponent as GraphqlIcon } from "assets/images/Graphql-logo.svg";

export const ENTITY_ICON_SIZE = 16;

const PagesIcon = MenuIcons.PAGES_ICON;
export const pageGroupIcon = (
  <PagesIcon
    color={Colors.CHARCOAL}
    height={ENTITY_ICON_SIZE}
    width={ENTITY_ICON_SIZE}
  />
);

const PageIcon = MenuIcons.PAGE_ICON;
export const pageIcon = (
  <PageIcon
    color={Colors.CHARCOAL}
    height={ENTITY_ICON_SIZE}
    width={ENTITY_ICON_SIZE}
  />
);

export const homePageIcon = (
  <Icon color={Colors.CHARCOAL} icon="home" iconSize={ENTITY_ICON_SIZE} />
);

const DefaultPageIcon = MenuIcons.DEFAULT_HOMEPAGE_ICON;
export const defaultPageIcon = (
  <DefaultPageIcon
    color={Colors.MINE_SHAFT_2}
    data-icon="home"
    height={ENTITY_ICON_SIZE}
    width={ENTITY_ICON_SIZE}
  />
);

const HiddenPageIcon = MenuIcons.EYES_OFF_ICON;
export const hiddenPageIcon = (
  <HiddenPageIcon
    color={Colors.CHARCOAL}
    height={ENTITY_ICON_SIZE}
    width={ENTITY_ICON_SIZE}
  />
);

const WidgetIcon = MenuIcons.WIDGETS_ICON;
export const widgetIcon = (
  <WidgetIcon height={ENTITY_ICON_SIZE} keepColors width={ENTITY_ICON_SIZE} />
);

const DBQueryIcon = MenuIcons.DATASOURCE_ICON_v2;
export const dbQueryIcon = (
  <DBQueryIcon height={ENTITY_ICON_SIZE} keepColors width={ENTITY_ICON_SIZE} />
);

const JSIcon = MenuIcons.JS_ICON_V2;
export const jsIcon = (
  <JSIcon height={ENTITY_ICON_SIZE} keepColors width={ENTITY_ICON_SIZE} />
);

const JSFileIcon = MenuIcons.JS_FILE_ICON;
export const jsFileIcon = (
  <JSFileIcon height={ENTITY_ICON_SIZE} keepColors width={ENTITY_ICON_SIZE} />
);

const JSFunctionIcon = MenuIcons.JS_FUNCTION_ICON;
export const jsFunctionIcon = (
  <JSFunctionIcon
    height={ENTITY_ICON_SIZE}
    keepColors
    width={ENTITY_ICON_SIZE}
  />
);

const SettingsIcon = ControlIcons.SETTINGS_CONTROL;
export const settingsIcon = (
  <SettingsIcon color={Colors.CODE_GRAY} height={16} width={16} />
);

const QueryMainIcon = MenuIcons.QUERY_MAIN;
export function QueryIcon() {
  return (
    <QueryMainIcon
      color={Colors.CHARCOAL}
      height={ENTITY_ICON_SIZE}
      width={ENTITY_ICON_SIZE}
    />
  );
}

const DataSourceIcon = MenuIcons.DATASOURCES_ICON;
export const datasourceIcon = (
  <DataSourceIcon
    color={Colors.ALTO}
    height={ENTITY_ICON_SIZE}
    width={ENTITY_ICON_SIZE}
  />
);

const DataSourceTableIcon = MenuIcons.DATASOURCES_TABLE_ICON;
export const datasourceTableIcon = (
  <DataSourceTableIcon
    height={ENTITY_ICON_SIZE}
    keepColors
    width={ENTITY_ICON_SIZE}
  />
);

const PrimaryKeyIcon = MenuIcons.PRIMARY_KEY_ICON;
export const primaryKeyIcon = (
  <PrimaryKeyIcon
    height={ENTITY_ICON_SIZE}
    keepColors
    width={ENTITY_ICON_SIZE}
  />
);

export const ForeignKeyIcon = MenuIcons.FOREIGN_KEY_ICON;
export const foreignKeyIcon = (
  <ForeignKeyIcon
    height={ENTITY_ICON_SIZE}
    keepColors
    width={ENTITY_ICON_SIZE}
  />
);

const DatasourceColumnIcon = MenuIcons.DATASOURCE_COLUMN_ICON;
export const datasourceColumnIcon = (
  <DatasourceColumnIcon
    height={ENTITY_ICON_SIZE}
    keepColors
    width={ENTITY_ICON_SIZE}
  />
);

export const DATASOURCE_FIELD_ICONS_MAP: Record<string, ReactNode> = {
  [PRIMARY_KEY]: primaryKeyIcon,
  [FOREIGN_KEY]: foreignKeyIcon,
};

const PluginIcon = styled.img`
  height: ${ENTITY_ICON_SIZE}px;
  width: ${ENTITY_ICON_SIZE}px;
`;

export const getPluginIcon = (plugin?: Plugin) => {
  if (plugin && plugin.iconLocation) {
    return <PluginIcon alt={plugin.packageName} src={plugin.iconLocation} />;
  }
  return <PluginIcon alt="plugin-placeholder" src={ImageAlt} />;
};

const StyledTag = styled.div<{ color: string }>`
  font-size: 8px;
  width: 40px;
  font-weight: 700;
  color: #fff;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 16px;
`;

export function MethodTag(props: { type: keyof typeof HTTP_METHOD }) {
  return (
    <StyledTag color={HTTP_METHODS_COLOR[props.type]}>{props.type}</StyledTag>
  );
}

const CurrentPageIcon = MenuIcons.CURRENT_PAGE_ICON;
export const currentPageIcon = (
  <CurrentPageIcon
    color={Colors.CHARCOAL}
    height={ENTITY_ICON_SIZE}
    width={ENTITY_ICON_SIZE}
  />
);

const SortIcon = MenuIcons.SORT_ICON;
export const SortFileIcon = (
  <SortIcon
    color={Colors.CHARCOAL}
    height={ENTITY_ICON_SIZE}
    width={ENTITY_ICON_SIZE}
  />
);

/**
 * Entity Icon components
 */

type EntityTextIconProps = {
  children: React.ReactNode;
  textColor?: string;
  fontSize?: number;
};

const EntityTextIconWrapper = styled.div<{ fontSize?: number; color?: string }>`
  color: ${({ color }) => (color ? color : Colors.SCORPION)};
  font-size: ${({ fontSize }) => fontSize + "%"};
  font-weight: 900;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 2px;
`;

// added fontSize prop to allow for dynamic sizing.
function EntityTextIcon(props: EntityTextIconProps): JSX.Element {
  return (
    <EntityTextIconWrapper color={props.textColor} fontSize={props.fontSize}>
      {props.children}
    </EntityTextIconWrapper>
  );
}

//border size is 8.5% of the height.
// (8.5% because for 18px of default height, the border is 1.5px).
//img and svg are set to 80% of the height to allow for the border to be visible and not cut off.
const EntityIconWrapper = styled.div<{
  borderColor?: string;
  width?: string;
  height?: string;
  noBorder?: boolean;
  bgColor?: string;
}>`
  height: ${({ height }) => (height ? height : "18px")};
  width: ${({ width }) => (width ? width : "18px")};
  background: ${({ bgColor }) => bgColor ?? Colors.WHITE};
  border: ${({ borderColor, height, noBorder }) =>
    noBorder
      ? "none"
      : `${parseInt(height ? height : "18px") * 0.0845}px solid ${
          borderColor ?? Colors.SCORPION
        }`};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg,
  img {
    height: 80% !important;
    width: 80% !important;
  }
`;

type EntityIconType = {
  children: React.ReactNode;
  borderColor?: string;
  width?: string;
  height?: string;
  noBorder?: boolean;
  bgColor?: string;
};

function EntityIcon(props: EntityIconType): JSX.Element {
  return (
    <EntityIconWrapper
      bgColor={props.bgColor}
      borderColor={props.borderColor}
      height={props.height}
      noBorder={props.noBorder}
      width={props.width}
    >
      {props.children}
    </EntityIconWrapper>
  );
}

EntityIcon.textIcon = EntityTextIcon;
export { EntityIcon };

/** ======= Entity Icon components ends ====== */

// height and width are set to 18px by default. This is to maintain the current icon sizes.
// fontSize is set to 56% by default.
export function ApiMethodIcon(
  type: keyof typeof HTTP_METHOD,
  height = "18px",
  width = "36px",
  fontSize = 56,
) {
  return (
    <EntityIcon
      borderColor={HTTP_METHODS_COLOR[type]}
      height={height}
      width={width}
    >
      <EntityIcon.textIcon
        fontSize={fontSize}
        textColor={HTTP_METHODS_COLOR[type]}
      >
        {type}
      </EntityIcon.textIcon>
    </EntityIcon>
  );
}

export function DefaultApiIcon() {
  return (
    <EntityIcon>
      <ApiIcon />
    </EntityIcon>
  );
}

export function CurlIconV2() {
  return (
    <EntityIcon>
      <CurlIcon />
    </EntityIcon>
  );
}

// height and width are set to 18px by default. This is to maintain the current icon sizes.
// fontSize is set to 56% by default.
export function JsFileIconV2(height = 18, width = 18) {
  return (
    <EntityIcon height={height + "px"} width={width + "px"}>
      <EntityIcon.textIcon fontSize={height * 3.05}>JS</EntityIcon.textIcon>
    </EntityIcon>
  );
}

export function GraphQLIconV2() {
  return (
    <EntityIcon>
      <GraphqlIcon />
    </EntityIcon>
  );
}
