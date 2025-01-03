import {Document, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {EntityArray, entityColors} from "../../models/Entity";
import {ElementArray} from "../../models/Element";
import React from "react";
import {useTranslation} from "react-i18next";
import {entityFilledIn, getResultFromAnswer} from "../../utils/ScanUtils";
import {Phase} from "../../models/Phase";

const AdviceDocument = () => {
	const {t} = useTranslation();

	const styles = StyleSheet.create({
		page: {
			padding: 32
		},
		subtitle: {
			fontSize: 24,
			fontWeight: 700,
		},
		heading: {
			fontSize: 16
		},
		subheading: {
			fontSize: 14,
			marginTop: 14
		},
		listView: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'flex-start',
			gap: 10,
			marginLeft: 10,
		},
		textLarge: {
			fontSize: 12
		},
		textNormal: {
			fontSize: 10
		},
		footerText: {
			position: 'absolute',
			bottom: 16,
			left: 16,
			right: 16,
			fontSize: 10,
			textAlign: 'center',
			color: 'grey'
		}
	});

	return (
		<Document>
			{
				EntityArray.map(entity => {
					if (!entityFilledIn(entity)) return null;
					const currentPhase = getResultFromAnswer(entity, 'checkedPosition');

					return (
						<Page key={entity} size={'A4'} style={styles.page}>
							<View>
								<Text
									style={[styles.subtitle, {color: entityColors[entity]}]}>{t(`entities.${entity}.name`)}</Text>
								<Text
									style={styles.textLarge}>{t(`entities.${entity}.phases.${currentPhase}.advice.introduction`)}</Text>
							</View>
							<View>
								{
									ElementArray.map(element => {
										return (
											<View key={element}>
												<Text
													style={[styles.subheading, {color: entityColors[entity]}]}>{t(`elements.${element}.name`)}</Text>
												{(t(`entities.${entity}.phases.${currentPhase}.advice.elements.${element}.text`, {returnObjects: true}) as string[]).map((text, index) => (
													<Text key={text}
														  style={[styles.textNormal, {paddingTop: index > 0 ? 10 : 0}]}>{text}</Text>
												))}
											</View>
										)
									})
								}
								{
									currentPhase === Phase.CHAIN_ORIENTED && (
										<View>
											<Text style={[styles.subheading, {color: entityColors[entity], paddingTop: 10}]}>{t('pages.result.endPhase.title')}</Text>
											<Text style={styles.textNormal}>{t('pages.result.endPhase.text', {phase: t(`phases.${currentPhase}.name`).toLowerCase()})}</Text>
										</View>
									)
								}
							</View>

							{
								currentPhase !== Phase.CHAIN_ORIENTED && (
									<View>
										<Text
											style={styles.subheading}>{t('pages.result.nextPhase.title', {phase: t(`phases.${currentPhase + 1}.name`).toLowerCase()})}</Text>
										<Text
											style={styles.textNormal}>{t('pages.result.nextPhase.text', {phase: t(`phases.${currentPhase + 1}.name`).toLowerCase()})}</Text>
										<View>
											{(t(`entities.${entity}.phases.${currentPhase}.advice.actions`, {returnObjects: true}) as string[]).map(action => (
												<View key={action} style={styles.listView}>
													<Text style={styles.textNormal}>•</Text>
													<Text style={styles.textNormal}>{action}</Text>
												</View>
											))}
										</View>
									</View>
								)
							}
						</Page>
					)
				})
			}
		</Document>
	)
}

export default AdviceDocument;
