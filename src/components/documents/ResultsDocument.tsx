import React, {useEffect, useState} from 'react';
import {Document, Image, Page, StyleSheet, Text, View} from '@react-pdf/renderer';
import {SvgToPng} from "../../utils/SvgConverter";
import {EntityArray, entityColors} from "../../models/Entity";
import {useTranslation} from "react-i18next";
import {ElementArray} from "../../models/Element";
import {ScanAnswer} from "../../models/ScanAnswer";
import {entityFilledIn, getResultFromAnswer, getScanAnswer} from "../../utils/ScanUtils";

const ResultsDocument = () => {
	const {t, i18n} = useTranslation();

	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		const fetchImages = async () => {
			const imgs = await Promise.all(Array.from(document.querySelectorAll('.assignment-model'))
				.map((svg) => SvgToPng(svg)));
			setImages(imgs);
		};

		fetchImages();
		// i18n.language is a dependency to ensure the correct language is used
	}, [i18n.language]);

	const styles = StyleSheet.create({
		page: {
			padding: 32
		},
		frontPage: {
			backgroundColor: '#fff',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		title: {
			fontSize: 32,
			fontWeight: 900,
			textAlign: 'center'
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

	const getCommentFromAnswer = (answer: ScanAnswer, answerType: 'commentPosition' | 'commentAmbition') => {
		return answer[answerType] ? answer[answerType] : t('pages.result.notFilledIn');
	}

	return (
		<Document>
			{
				["position", "ambition"].map((result, index) => (
						<Page key={result} size={'A4'} style={styles.page}>
							<View>
								<Text style={styles.title}>{t(`pages.scan.${result}.name`)}</Text>
								{images[index] && <Image src={images[index]}/>}
							</View>

							{
								EntityArray.map((entity) => {
									if (!entityFilledIn(entity)) return null;

									const checkedToGet = index === 0 ? 'checkedPosition' : 'checkedAmbition';
									const resultToGet = index === 0 ? 'position' : 'ambition';
									const phase = getResultFromAnswer(entity, checkedToGet);

									return (
										<View key={entity} break>
											<Text
												style={[styles.subtitle, {color: entityColors[entity]}]}>{t(`entities.${entity}.name`)}</Text>

											<Text
												style={styles.textNormal}>{t(`entities.${entity}.phases.${phase}.result.${resultToGet}`)}</Text>

											{
												ElementArray.map((element) => {
													const answer = getScanAnswer(entity, element);
													const commentToGet = index === 0 ? 'commentPosition' : 'commentAmbition';

													return (
														<View key={element}>
															<Text
																style={[styles.subheading, {color: entityColors[entity]}]}>{t(`elements.${element}.name`)}</Text>

															<View>
																<View>
																	<Text
																		style={styles.textNormal}>{t('pages.scan.answer')}</Text>
																	<Text style={styles.textNormal}>
																		{t(`entities.${entity}.elements.${element}.phases.${answer.checkedPosition}.description`)}
																	</Text>
																</View>
																<View>
																	<Text
																		style={[styles.textNormal, {paddingTop: 12}]}>{t('pages.scan.explain')}</Text>
																	<Text style={styles.textNormal}>
																		{getCommentFromAnswer(answer, commentToGet)}
																	</Text>
																</View>
															</View>
														</View>
													)
												})
											}
										</View>
									)
								})
							}

							<Text style={styles.footerText} render={({pageNumber, totalPages}) => (
								`${t(`pages.scan.${result}.name`)} - ${t('pages.result.page')} ${pageNumber}/${totalPages}`
							)} fixed/>
						</Page>
					)
				)
			}
		</Document>
	);
};

export default ResultsDocument;