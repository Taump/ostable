import React from "react";
import styles from "./UseCase.module.css";
import MainStyles from "../../Home.module.css";
import case1 from "./img/case-1.svg";
import case2 from "./img/case-2.svg";
import case3 from "./img/case-3.svg";

export const UseCase = () => (
		<section className="usecase">
			<div className={MainStyles.container}>
				<div className={styles.title}>
					Discount Stablecoins are different things to different investors
				</div>
				<div className={styles.list}>
					<div className={styles.itemCaseReverse}>
						<div className={styles.caseInfo}>
							<div className={styles.caseTitle}>
								To earn interest on your BTC
							</div>
							<div className={styles.road}>
								<ul>
									<li>
										Buy BTC_20200701 stablecoin. It trades below 1 BTC now but is supposed to appreciate towards 1
										BTC
										closer to the expiry
										date - July 1, 2020.
									</li>
									<li>Hold it.</li>
									<li>
										Sell it before the expiry date.
									</li>
								</ul>
							</div>
							<div className={styles.descr}>
								BTC_20200701 is traded vs BTC on {" "}
								<a target="_blank" rel="noopener" href="https://cryptox.pl/">Cryptox exchange</a>.
							</div>
							<div className={`${styles.caseLink} ${styles.caseLinkOrange}`}>
								<a target="_blank" rel="noopener" href="https://cryptox.pl/">Start trading</a>
							</div>
						</div>
						<div className={`${styles.image} ${styles.image1}`}>
							<img src={case1} alt="To earn interest on your BTC"/>
						</div>
					</div>
					<div className={styles.itemCase}>
						<div className={`${styles.image} ${styles.image2}`}>
							<img src={case2} alt="To take a leveraged long position in GBYTE"/>
						</div>
						<div className={styles.caseInfo}>
							<div className={styles.caseTitle}>
								To take a leveraged long position in GBYTE
							</div>
							<div className={styles.road}>
								<ul className={styles.roadYellow}>
									<li>Borrow BTC_20200701 stablecoin on this website by locking GBYTE as collateral.</li>
									<li>
										Sell BTC_20200701 for GBYTE. Now you have exposure both to GBYTE in the collateral and GBYTE you
										received from the sale
										of stablecoins.
									</li>
									<li>
										Wait for GBYTE to appreciate.
									</li>
									<li>Close the position by buying BTC_20200701 back from the market.</li>
									<li>Repay the loan to release the collateral.</li>
								</ul>
							</div>
							<div className={styles.descr}>
								BTC_20200701 is traded vs GBYTE on <a target="_blank" href="https://odex.ooo/GBYTE/BTC_20200701">
								ODEX decentralized exchange</a> and <a target="_blank" rel="noopener" href="https://oswap.io/">
								Oswap automated market maker</a> (coming soon).
							</div>
							<div className={`${styles.caseLink} ${styles.caseLinkYellow}`}>
								<a target="_blank" rel="noopener" href="/app">Start trading</a>
							</div>
						</div>
					</div>
					<div className={styles.itemCaseReverse}>
						<div className={styles.caseInfo}>
							<div className={styles.caseTitle}>
								To trade one asset/index against another asset/index
							</div>
							<div className={styles.caseSubTitle}>
								e.g. gold vs USD, gold vs silver, S&P500 vs USD, etc
							</div>
							<div className={styles.road}>
								<ul className={styles.roadBlue}>
									<li>Borrow a stablecoin tracking the asset/index you want to short.</li>
									<li>Sell it for another stablecoin tracking the asset/index you want to take a long position in.
									</li>
									<li>
										Wait for the desired price movement.
									</li>
									<li>
										Close the position by buying stablecoin 1 back for stablecoin 2.
									</li>
									<li>Repay the loan to release the collateral.</li>
								</ul>
							</div>
							<div className={styles.descr}>
								Various stablecoins are traded on <a target="_blank" rel="noopener" href="https://odex.ooo">
								ODEX decentralized exchange
							</a> and <a target="_blank" rel="noopener" href="https://oswap.io/">
								Oswap automated market maker</a> (coming soon).
							</div>
							<div className={`${styles.caseLink} ${styles.caseLinkBlue}`}>
								<a target="_blank" rel="noopener" href="/app">Start trading</a>
							</div>
						</div>
						<div className={`${styles.image} ${styles.image3}`}>
							<img src={case3} alt="To trade one asset/index against another asset/index"/>
						</div>
					</div>
				</div>
			</div>
		</section>
)